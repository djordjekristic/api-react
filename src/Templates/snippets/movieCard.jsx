
const MovieCard = ({movie})=>{
    return(
    <div className="col-4 p-1 text-white">
    <img src={movie.Poster}/>
        <h1 className="mt-1">{movie.Title}</h1>
        <p>{movie.Year}</p>
    </div>
    )
}

export default MovieCard;