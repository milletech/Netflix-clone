
import React,{useEffect, useState} from 'react';
import axios from '../axios';
import requests from '../requests';
import "../styles/Banner.css"

function Banner() {
    const [movie, setMovie] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      async function fetchData() {
        const request = await axios.get(requests.fetchNetflixOriginals);
        setMovie(request.data.results);
      }
      fetchData();
    }, []);
  
    const updateIndex = () => {
      if (currentIndex < movie.length) {
        const nextIndex = currentIndex + 1;
        setCurrentIndex(nextIndex);
      }
      if (currentIndex === movie.length - 1) {
        setCurrentIndex(0);
      }
    };
  
    setTimeout(updateIndex, 6000);
  
    return (
      <header
        className="banner"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie[currentIndex]?.backdrop_path}")`,
          backgroundPosition: "top",
          transition: "all ease-in .5s",
        }}
      >
        <div className="banner__contents">
          <h1 className="banner__title">
            {movie[currentIndex]?.title ||
              movie[currentIndex]?.name ||
              movie[currentIndex]?.original_name}
          </h1>
  
          <div className="banner__buttons">
            <button className="banner__button">Play</button>
            <button className="banner__button">My List</button>
          </div>
  
          <h1 className="banner__description">{movie[currentIndex]?.overview}</h1>
        </div>
  
        <div className="banner--fadeBottom" />
      </header>
    );
  }
  
  export default Banner;