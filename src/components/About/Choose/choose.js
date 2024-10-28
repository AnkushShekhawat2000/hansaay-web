import Passionate from  "../../../assets/passionate.svg"
import Professional from "../../../assets/professional.svg"
import Support from "../../../assets/support.svg"

import "./choose.css"

const Choose = () => {

    return (

        <div className="choose-container">
        
           <h2>Why Choose Us</h2>

           <div className="choose-items">

               <div className="passionate card">
                    <img src={Passionate}/>
                    

                    <h1>Passionate</h1>

                    <p>Tempor ullamcorper urna, est, lectus amet sit tempor pretium mi sed morbi cras posuere sit ultrices bibendum augue sit ornare.</p>
               
               </div>



               <div className="Professional card">
                    <img src={Professional} />
                  

                    <h1>Professional</h1>

                    <p>Tempor ullamcorper urna, est, lectus amet sit tempor pretium mi sed morbi cras posuere sit ultrices bibendum augue sit ornare.</p>
          
               </div>




                <div className="Support card">
                    <img src={Support}/>
                  

                    <h1>Support</h1>

                    <p>Tempor ullamcorper urna, est, lectus amet sit tempor pretium mi sed morbi cras posuere sit ultrices bibendum augue sit ornare.</p>
                </div>

           
           </div>
        
        
        </div>
    )
}



export default Choose;