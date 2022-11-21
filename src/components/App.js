import '../styles/App.css';
import Row from './Row';
import requests from "../requests";
import Banner from './Banner';

import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';
import Home from './Home';
import Search from "./Search"
import { useState } from 'react';

function App() {
  const [search, setSearch] = useState([]);

  const onSearchHandler =(movies) =>{
    // console.log(movies);
    setSearch(movies);
    // setSearch([...movies]);
  }
  
  
  return (
    
    <div className="App">
      <Router>
        <Nav searchHandler={onSearchHandler}/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path="/search" element={<Search movies={search}/>}/>
        </Routes>
        <Footer/>
      
      </Router>
      


      {/* <Banner/>
      <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="Documantaries" fetchUrl={requests.fetchDocumantaries}/> */}
      
    </div>
  );
}
export default App;
