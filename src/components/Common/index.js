import Button from "../Button";
import Header from "../Header";
import "./style.css"

const Common = ({text}) => {
    return (
        <div className="common-container">
            <Header bgStyle={{backgroundColor: "#060097"}}/>
            <div className="common">
               <div className="title-div">
                  <h1>{text}</h1>
               </div>
               <div className="input-div">
                  <p>It seems we can't find you're looking for. Perhaps searching can help</p>

                  <input type="text" placeholder="Search..."/>
                  <Button className="btn" text="Search"/>
               </div>
            </div>   
           
        </div>
    )
}

export default Common;