import './Display.css'
function Display(props){
     return(
         <div className='movieCont'> 
              <div className='firtMovieCont'>
                 <img src={props.movieImg} className='movieImg'/>
                 <p className='movieTitle'>{props.movieTitle}</p>
                 <p className='movieInfo'>{props.movieInfo}</p>
                 <p className='show'>{props.show}</p>
              </div>
              <div className='firtMovieCont'>
                 <img src={props.familyMovieTitle} className='movieImg'/>
                 <p className='movieTitle'>{props.moviePrice}</p>
                 <p className='movieInf'>{props.movieInf}</p>
                 <p className='show'>{props.show}</p>
              </div>
             
              <div className='firtMovieCont'>
                 <img src={props.movieFamily} className='movieImg'/>
                 <p className='movieTitle'>{props.familyMovieTitle}</p>
                 <p className='movieInf'>{props.familyMovieInfo}</p>
                 <p className='show'>{props.show}</p>
              </div>
             
              
         </div>
     )
}export default Display