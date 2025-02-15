import axios from '../src/axios';
import React, { useState, useEffect } from 'react';
import requests from './requests';
import './Banner.css';

function Banner() {
  const [movie, setMovie] = useState([]);

  
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ]
      );
      
      return request;
      
    }
    fetchData();
  }, []);


  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str;
  }

  return (
    // background image
    <header
      className="banner"
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: 'center center',
      }}
    >
      <div className="banner_contents">
        {/* title of banner movie/series */}
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        {/* div > 2 buttons */}
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        {/* description of banner movie/series */}
        <h1 className="banner_description">{truncate(movie?.overview, 150)}</h1>

        <div className='banner_fadeBottom'></div>
      </div>
    </header>
  );
}

export default Banner;
