import "./style.css"
const Button = ({text, onClick, outlined}) =>{
    return <div className={outlined ? "outlined-btn" : "btn"}>{text}</div>
}

export default Button