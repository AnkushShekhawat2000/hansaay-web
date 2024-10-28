import { useState } from "react"
import Drawer from "@mui/material/Drawer"
import MenuRoundedIcon from "@mui/icons-material/MenuRounded"
import { IconButton } from "@mui/material";
import {Link} from 'react-router-dom'
import "./drawer.css"


export default function TemporaryDrawer(){
    const [open , setOpen] = useState(false);

    return (
        <div>
           <IconButton onClick={() => setOpen(true)}>
             <MenuRoundedIcon className="link"/>
           </IconButton>
           <Drawer 
                anchor={"right"}
                open={open}
                onClose={()=>setOpen(false)}  
           >
             <div className="drawer-div">
                
                    <Link to="/"  className="dlink">
                        <p >Home</p> 
                    </Link>

                    
                    <Link to="/services"  className="dlink">
                        <p >Services</p> 
                    </Link>

    
                    
                    <Link to ="/about" className="dlink">
                    <p>About</p> 
                    </Link> 
                    
                    <Link to ="/t" className="dlink">
                        <p >Why Us</p> 
                    </Link>


                    <Link to ="/contact" className="dlink">
                        <p >Contact</p> 
                    </Link>

                    <Link to ="/blog" className="dlink">
                    <p >Blog</p> 
                    </Link>

        
             </div>
         </Drawer>        
        </div>
    )
}