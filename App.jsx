import Header from './src/components/Header'
import Hero from "./src/components/Hero"
import Display  from './src/components/Displayd';
import RedCoat from './src/assets/RedCoat.jpg'
import Disney from './src/components/Disney'
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
          <Disney />
     </div>
   ) 
}export default  App;