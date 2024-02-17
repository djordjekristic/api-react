
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

const Search = ()=>{
    return(
    <>
    <form className='bg-dark text-white'>
   <div className='container p-5'>     
    <Form.Group className="mb-2" controlId="formBasicTerm">
        <Form.Label>Movie title</Form.Label>
        <Form.Control type="text" placeholder="Enter movie name" />
      </Form.Group>
      <Button variant="success" type="button">
        Search
      </Button>
    </div>  
      
      </form>
      
    </>
    )
}
export default Search