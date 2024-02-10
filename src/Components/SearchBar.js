import { useState } from "react";
import CallApi from "../CallApi";

const SearchBar = ()=>{

    let [newFilm,setNewFilm] = useState("");
    
    
    
        
    
    return(
        <>
        <input type="text" onInput={(e)=>setNewFilm(e.target.value)} placeholder="Enter the name of the move"/>
        <CallApi title={newFilm}/>
        </>
    )
}

export default SearchBar;