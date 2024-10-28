import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Header from './components/Header';
import Footer from './components/Footer';
import Home from "./components/Home"
import Services from "./components/Services"
import MobileDeveloper from "./components/DropDown/AndroidDeveloper"
import AndroidDeveloper from "./components/DropDown/MobileDeveloper"
import SaasDeveloper from "./components/DropDown/SaasDeveloper"
import About from  "./components/About"
import Common from "./components/Common"
import Blog from "./components/Blog"
import Contact from "./components/About/Contact"




function App() {
  return (
    <div className="App">
    <BrowserRouter>
  
          <Routes>
              <Route path="/"         element={<Home/>} />
              <Route path="/services" element={<Services/>} />
                  
              
              <Route path="web-development" element={<Common text="Web Development" />} />
              <Route path="RFID" element={<Common text="RFID Solution Development" />} />
              <Route path="/mobile-app-developement" element={<Common text="Mobile App Developer"  />} />  
              <Route path="/saas-developer" element={<Common text="SaaS Developer"  />} />
                
              <Route path="/training" element={<Common  text="Software Development Training"/>}/>

              <Route path="/about"  element={<About/>}/>

              <Route path="/blog"  element={<Blog/>}/>

              <Route path="/contact"  element={<Contact/>}/>
              
          </Routes>
        </BrowserRouter>
     
      

      
    </div>
  );
}

export default App;
