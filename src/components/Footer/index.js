import React from "react"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import Twitter from "../../assets/twitter.svg"
import "./style.css";

const Footer = () => {
    return (
       
                       
                <div class="container ">

           
             
                    <div className="icon-container">
                              <InstagramIcon className="icon"/>
                              <FacebookIcon className="icon"/>
                              <img src={Twitter} alt="Twitter Icon" className="icon" />
                    </div>

                    <div className="bottom">
                        <p>© 2020 Copyright:</p>
                        <a  href="https://hansaay.com/">hansaay.com</a>
                    </div>
         

               </div>
             
           )
}


export default Footer