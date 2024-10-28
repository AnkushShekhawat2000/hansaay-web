import React, { useState } from "react"; // Importing useState from React
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import TemporaryDrawer from "./drawer.js";
import "./style.css";

const Header = ({bgStyle}) => {
    // useState ka sahi tarike se initialization
    const [showDropDown, setShowDropDown] = useState(false);
    const navigate = useNavigate();

    function handleMouseEnter() {
        setShowDropDown(true);  // Dropdown ko show karein
    }

    function handleMouseLeave() {
        setShowDropDown(false);  // Dropdown ko hide karein
    }

    function handleNavigate(path){

        navigate(path);

    }

    return (
        <div className="navbar"  style={bgStyle ? bgStyle : { backgroundImage: "linear-gradient(to right, #3901C1, #BD0FFF)" }}>
            <div className="logo">
              <img src={logo} alt="Logo" />
            </div>
            
           <div className="links">

                <Link to="/"  className="link">
                    <p >Home</p> 
                </Link>

                {/* Services link with hover dropdown */}
              <div 
                className="dropdown-container"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{ position: "relative" }} /* Ensure dropdown is positioned correctly */
               >
                    <Link to="/services"  className="link">
                        <p >Services</p> 
                    </Link>

                    {/* Dropdown menu */}
                    {
                        showDropDown && (
                            <div className="dropdown">
                               <div>
                                 <Link to="/web-development"  className="link"><p >Web Development</p></Link>
                               </div>
                               
                               <div>
                                 <Link to="/mobile-app-developement" className="link" ><p >Mobile App Development</p></Link>
                               </div>

                               <div>
                                 <Link onClick={()=>handleNavigate("/saas-developer")}  className="link"><p >SaaS Developement</p></Link>
                               </div>

                               <div>
                                 <Link to="/RFID" className="link"><p>RFID Solution Development</p></Link>
                               </div>
                            </div>
                        )
                    }
                </div>

                <Link to ="/training" className="link">
                    <p >Software Development Training</p> 
                </Link>
                
                <Link to ="/about" className="link">
                    <p>About</p> 
                </Link> 
                
                <Link to ="/contact" className="link">
                    <p >Contact</p> 
                </Link>
           
           </div>

            <div className="mobile-drawer">
               <TemporaryDrawer/>
            </div>
        </div>
    )
}

export default Header;
