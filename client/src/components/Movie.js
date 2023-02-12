import React from "react";
import "./Movie.css";
const movie=({movie})=>{
    return(
        <div className="movie">
            <h1>{movie.title}</h1>
            <img src={movie.image} alt={movie.title}/>
            <p>Rating:{movie.rating}</p>
        </div>
    );
}
export default movie;