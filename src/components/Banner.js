
import React,{useEffect, useState} from 'react';
import axios from '../axios';
import requests from '../requests';
import "../styles/Banner.css"

function Banner() {
    const [movie,setMovie]=useState([]);

    useEffect(()=>{
        async function fetchData(){
            const request=await axios.get(requests.fetchNetflixOriginals);

            setMovie(request.data.results[Math.floor(Math.random()*request.data.results.length-1)])
            
        }

        fetchData();

    },[]);

    // console.log(movie)
    // function truncateString(str, num) {
    //     console.log(str)
    //     if (str.length > num) {
    //       return str.slice(0, num) + "...";
    //     } else {
    //       return str;
    //     }
    // }

    //console.log(movie)
    return (
        <header className='banner'
        style={{
            backgroundSize:"cover",
            backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundPosition:"top"
        }}
        >

            <div className="banner__contents">
                {/* Title */}
                <h1 className='banner__title'>
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                {/* div with 2 buttons */}
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>
                {/* description */}

                
                <h1 className="banner__description">
                    
                    {movie?.overview}
                    
                    {/* {truncateString(movie?.overview,150)} */}
                </h1>
            </div>

            <div className="banner--fadeBottom"/>

        </header>
    )
}

export default Banner;