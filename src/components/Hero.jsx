import "./Hero.css"
import Taylor from '../assets/reaaltaylor.jpg'
function Hero (){
     return (
        <div className="Hero">  
             <img src={Taylor} alt=""ss  id="taylor"/>
             <div className="textCont
             ">
             <p className="tay">taylor swift</p>
             <p className="tay">the eras tour</p>
             <p className="version">(taylo's version)</p>

             <p className="includes">include cardigan and for additional acoustic . </p>
             <p className="now">now streaming on disney</p>
             <button className="sub">subscribe now*</button>
             </div>
        </div>
     )
}export default Hero;