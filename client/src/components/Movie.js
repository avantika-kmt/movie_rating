import React from "react";
import "./Movie.css";
const movie=({movie})=>{
    return(
        <div className="movie">
            <div className="card"> 
                <h2>{movie.title}</h2>
                <img src={movie.image} alt={movie.title}/>
                <p style= {{color: "yellow"}}>Rating: {movie.rating}</p>
             </div>    
        </div>
    );
}
export default movie;