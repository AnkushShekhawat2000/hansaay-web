import Card from "../../components/Home/Card"
import  {servicesData} from "./data"
import Header from "../Header";
import Footer from "../Footer";
import "./style.css"


const Services = () => {

    return (
       <>
          <Header/>
          <div className="sevices-container">
          
            <h2 className="services-heading">Our Services</h2>
            
            <div className="cards-container">
            {

                servicesData.map((item , index) => {
                    // console.log(item);
                    // console.log(index);
                    // console.log("desc",item.description);
                    // console.log("title", item.title);

                    return  <Card key={index} img={item.img} title={item.title} desc={item.description} />;
                })
                
            }
            </div>
          
       </div>
       <Footer/>
       </>

       
    )
}

export default Services;