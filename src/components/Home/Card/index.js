import "./style.css";

const Card = ({img, title, desc }) => {



    return (
        <div className="card">
             <img src={img} alt={title} />
             <h4>{title}</h4>
             <p>{desc}</p>
        </div>
    )
}

export default Card