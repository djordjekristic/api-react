
import axios from 'axios';
import './App.css';
import MoviesData from './Components/MoviesData';
import Navigation from './Templates/snippets/Navigation';
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from './Templates/snippets/Footer';
import Search from './Components/Search';

const App = () => {
  return(
    <>
    <h3>Search movies data</h3>
    <Navigation/>
    <Search/>
    <MoviesData/>
    <Footer/>
    
     
    </>
  )
  
}

export default App;
