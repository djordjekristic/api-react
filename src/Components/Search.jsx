
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import SearchResults from '../Templates/SearchResults';

const Search = ()=>{
    let[movies,setMovies]= useState([]);
    let[searchTerm,setSearchTerm]= useState()
    

    const searchMovies = ()=>{
        axios(process.env.REACT_APP_OMDBAPI_URL+'?s='+searchTerm+'&apikey='+process.env.REACT_APP_OMDBAPI_KEY)
    .then(response => setMovies(response.data.Search))
    .catch(error => alert('something is wrong'));
    }
    return(
    <>
    <form className='bg-dark text-white'>
   <div className='container p-5'>     
    <Form.Group className="mb-2" controlId="formBasicTerm">
        <Form.Label>Movie title</Form.Label>
        <Form.Control onInput={e=>setSearchTerm(e.currentTarget.value)} type="text" placeholder="Enter movie name" />
      </Form.Group>
      <Button onClick={searchMovies} variant="success" type="button">
        Search
      </Button>
    </div>  
      
      </form>
      <SearchResults movies={movies}/>
      
    </>
    )
}
export default Search