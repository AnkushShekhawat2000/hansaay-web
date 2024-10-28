import aboutImg from "../../../assets/aboout.jpg"
import "./style.css"
const Dream = () => {
    return (
        <div className="dream">  
          <div className="para"> 
            <h1>Our team build the business of their dreams</h1>
          
               <p>Your vision, our technology—together, we build solutions that propel your business forward..</p>

              <p> Innovative IT solutions crafted to fit your unique needs, ensuring a future-ready business today.</p>
            </div>
            <div className="img">
               <img src={aboutImg}/>
            </div>
        </div>
    )
}


export default Dream;