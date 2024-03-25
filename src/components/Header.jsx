import './Header.css'
import Disney from '../assets/disney.png'

function Header(){
     return (
         <div>
             <div className="headerCont">
                    <img src={Disney} alt=''className='logo'/>
                    <div className="linkContainer">
                      <a href="#">disney+</a>
                      <a href="#">shop</a>
                      <a href="#">movies</a>
                      <a href="#">show</a>
                      <a href="#">parks</a>
                    </div>
             </div>
         </div>
     )
}export default Header;