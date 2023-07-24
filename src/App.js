import logo from './logo.svg';
import './App.css';
import Row from './Row';
import requests from './request';
import Banner from './Banner';
import Nav from './Nav';
function App() {
  return (
    <div className="App"> 
    <Nav />
     <Banner/>
      <Row title="Netflix Orginals"  fetchURL={requests.fetchNetflixOriginals} isLarge />
      <Row title="Trending Now"  fetchURL={requests.fetchTrending} />
      <Row title="Top Rated"  fetchURL={requests.fetchTopRated} />
      <Row title="Action Movies"  fetchURL={requests.fetchActionMovies} />
      <Row title="Horror Movies"  fetchURL={requests.fetchHorrorMovies} />
      <Row title="Comedy Movies"  fetchURL={requests.fetchComedyMovies} />
      <Row title="Romantic Movies"  fetchURL={requests.fetchRomanceMovies} />
      <Row title="Documentaries"  fetchURL={requests.fetchDocumantaries} />
   

    </div>
  );
}

export default App;
