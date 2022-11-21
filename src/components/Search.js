import React from 'react'
import "../styles/Search.css"
const base_url="https://image.tmdb.org/t/p/original";
function Search({movies}) {
  return (
    <div className="container">
        {movies.map(movie=>(
            <img
                key={movie.id}
                className= {"row__posterLarge"}
                src={`${base_url}${movie.poster_path}`} 
                alt={movie.name}/>
        ))}

    </div>
  )
}

export default Search