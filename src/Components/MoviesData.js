import { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import MovieCard from "../Templates/snippets/movieCard";

const MoviesData = () =>{

    let [moveName,setMoveName] = useState();
    let[movieData,setMovieData] = useState({});

    const searchMovie = (e)=>{
        axios(process.env.REACT_APP_OMDBAPI_URL+'?t='+moveName+'&apikey='+process.env.REACT_APP_OMDBAPI_KEY)
    .then(response => setMovieData(response.data))
    .catch(error => alert('something is wrong'));
    }
    return(
        <>
        <form onSubmit={e=>{e.preventDefault()}} className="mb-2">
        <input onInput={e=> setMoveName(e.currentTarget.value)}  type="text" placeholder="enter the movies name"/>
        <button onClick={searchMovie}  type="button">Find</button>
        </form>

        <MovieCard movie={movieData}/>
        
        
        </>
    )
}

export default MoviesData;
//
