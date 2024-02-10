 import axios from "axios"
 import SearchBar from "./Components/SearchBar";

 
    
   

 const CallApi = (props)=>{
    let Api=
    axios(process.env.REACT_APP_OMDBAPI_URL+'?t='+props.title+'&apikey='+process.env.REACT_APP_OMDBAPI_KEY)
    .then(response =>console.log( response.data))
    .catch(error => alert('something is wrong'));
    
   
    return(
    <>
     {console.log(Api)}
    </>
   )
 }

export default CallApi