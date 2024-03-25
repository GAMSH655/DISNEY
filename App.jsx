import Header from './src/components/Header'
import Hero from "./src/components/Hero"
import Display  from './src/components/Displayd';
import RedCoat from './src/assets/RedCoat.jpg'
import DisneyMovies from './src/components/Disney'
import Father from "./src/assets/Fatherback.jpg"
import Family from "./src/assets/family.jpg"
function App(){
   return(
     <div>
        <Header />
        <Hero />
        < Display movieImg ={RedCoat}
         movieTitle = "mary poppins the musical uk and irelan tour" 
         movieInfo =" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic debitis illum, expedita quae quas officiis omnis veritatis? Ea cumque libero ab asperiores nemo dolorem suscipit, nesciunt, aliquid, reprehenderit dolores neque!"
         show="show"
         />
        < Display movieFather ={Father}
         moviePrice = "price example 147*/person/night" 
         movieInf =" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic debitis illum, expedita quae quas officiis omnis veritatis? Ea cumque libero ab asperiores nemo dolorem suscipit, nesciunt, aliquid, reprehenderit dolores neque!"
         show="disneyland paris"
         />
         <DisneyMovies movieFamily={Family} familyMovieTitle = "big eurostar saving" familyMovieInfo="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic debitis illum, expedita quae quas officiis omnis veritatis? Ea cumque libero ab asperiores nemo dolorem suscipit, nesciunt, aliquid, reprehenderit dolores neque!"
         show="disneyland paris" />
     </div>
   ) 
}export default  App;