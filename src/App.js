import React from 'react';
import Banner from './Banner';
import Footer from './Footer';
import Nav from './Nav';
import requests from './requests';
import Row from './Row';

function App(props) {
  return (
    <div className="app">
      {/* NavBar */}
      <Nav />

      {/* Home image banner */}
      <Banner />

      {/* Movie and series lists */}
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumantaries} />
      <Footer />
    </div>
  );
}

export default App;
