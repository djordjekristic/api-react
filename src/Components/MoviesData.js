import { useState } from "react";
import axios from "axios";

const MoviesData = () =>{

    let [moveName,setMoveName] = useState();

    const searchMovie = (e)=>{
        axios(process.env.REACT_APP_OMDBAPI_URL+'?t='+moveName+'&apikey='+process.env.REACT_APP_OMDBAPI_KEY)
    .then(response =>console.log( response.data))
    .catch(error => alert('something is wrong'));
    }
    return(
        <>
        <input onInput={e=> setMoveName(e.currentTarget.value)}  type="text" placeholder="enter the movies name"/>
        <button onClick={searchMovie}  type="button">Find</button>

        </>
    )
}

export default MoviesData
//
