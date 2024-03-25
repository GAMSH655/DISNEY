import "./Disney.css"
import  Marvel  from "../assets/marvel.jpg"
import  Iwaju from "../assets/iwaju.jpg"
import Lion from "../assets/lionhead.jpg"
function Disney(){
    const disneyArray =[
        {
        id : 1,
         movieCover :Marvel,
        movieName : "the marvels"
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
    //  return(
       
    //      <div className="disney">
    //      {
    //         disneyArray.map((disney)=>{
    //             return(
    //               movieCover ={disney.movieCover}
    //             )
    //         })
    //      }
    //      </div>
    //  )
}export default Disney;