import "./Disney.css"
import  Marvel  from "../assets/marvel.jpg"
import  Iwaju from "../assets/iwaju.jpg"
import Lion from "../assets/lionhead.jpg"

const disneyMovies =[
    {
    id : 1,
    movieCover :Marvel,
    movieName : "the marvels",
} ,
    {
    id : 2,
     movieCover :Iwaju,
    movieName : "iwaju"
    },
    {
        id : 3,
     movieCover :Iwaju,
    movieName : "iwaju"
    },
    {
        id : 4,
     movieCover :Lion,
    movieName : "Lion"
    },
]
function Disney(){
    console.log(disneyMovies)
    return (
        <div>
            {disneyMovies.forEach((movie, index) => {
                <section className="movieBox" key={index}>
                     <h4>{movie.movieName}</h4>
                     <img src={movie.movieCover} alt={movie.movieName} />
                </section>
               

            })}
        </div>
    )
  
}

export default Disney;