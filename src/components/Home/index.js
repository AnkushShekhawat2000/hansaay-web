import "./home.css";
import Header from "../Header";
import Button from "../Button";
import Card from "./Card";
import {motion} from "framer-motion"
import {data} from "../Home/data"
import Footer from "../Footer"

const Home = () => {
    return (
  
        <div>
            <Header/>
            <div className="banner-container">
                
                <div className="leftside">
                    <motion.h1
                        className="heading"
                        initial={{opacity: 0, x: 50}}
                        animate={{opacity: 1, x:0}}
                        transition={{duration:0.4, delay:0.2}}
                      
                    >
                    IT Solutions and Training
                    </motion.h1>

                    <h3 className="typed">
                        We offer IT digital solutions to businesses, schools and colleges, and restaurants.
                    </h3>

                    <motion.div
                    className="lightButton"
                    initial={{opacity: 0, y: 50}}
                    animate={{opacity: 1, y:0}}
                    transition={{duration:0.5}}
                    > <Button className = "btn" text={"Enquire now"}/></motion.div>
                   
                
                </div>

                <motion.div className="rightside"
                initial={{y:-10}}
                animate={{y:10}}
                transition={{
                 type: "smooth",
                 repeatType: "mirror",
                 duration: 2,
                 repeat: Infinity,
                }} 
                >
                    <img src="https://hansaay.com/wp-content/themes/astra/inc/assets/images/starter-content/hero-img.svg"/>
                    
                </motion.div>

            </div>


            <div className="detail-container flex">
                 {
                    data.map((item , index) => {
                        return (
                            <Card key={index} img={item.img} title={item.title} desc = {item.description}/>
                        )
                    }) 
                 }
            </div>
            <Footer/>

      
      

       
        </div>
    



            

    

    )
}


export default Home;