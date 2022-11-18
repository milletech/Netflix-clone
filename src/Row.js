import React,{useState,useEffect} from 'react';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import axios from "./axios";
import "./Row.css";

const base_url="https://image.tmdb.org/t/p/original";
function Row(props) {
    const [movies,setMovies]=useState([]);
    const [trailerUrl,setTrailerUrl]=useState("");

    // A snipet of code which runs based on a specific condition/varieble
    // As soon as the row/page load the request will be made to the API
    useEffect(()=>{
        // Run once when the row//page load, and don't run again

        async function fetchData(){
            const request=await axios.get(props.fetchUrl);
            setMovies(request.data.results);
        }

        fetchData();

    },[props.fetchUrl])

    // console.log(movies)
    const opts={
        height:"390",
        width:"100%",
        playerVars:{
            autoplay:1,
        }
    }

    const handleClick=(movie)=>{
        if(trailerUrl){
            setTrailerUrl("");
        }else{
            // Movietrailer package will find trailer on YouTube based on the name
            movieTrailer(null, { tmdbId: movie.id } )
            .then((url)=>{
                
                const urlParams= new URLSearchParams(new URL(url).search);
                console.log(urlParams)
                setTrailerUrl(urlParams.get("v"));
            })
            .catch((error)=>console.log(error))
        }
    }

  return (
    <div className="row">
        {/* title */}
        <h2>{props.title}</h2>

        {/* container -->posters */}
        <div className="row__posters">
            {movies.map(movie=>{
                return <img
                onClick={()=>{handleClick(movie)}}
                key={movie.id}
                className={`row__poster ${props.isLargeRow && "row__posterLarge"}`}
                src={`${base_url}${props.isLargeRow?movie.poster_path:movie.backdrop_path}`} 
                alt={movie.name}/>
            })}
        </div>
        
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
        
    </div>
  )
}

export default Row