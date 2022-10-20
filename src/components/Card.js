import "./Card.css";
import CardText from "./CardText.js";
import CardImage from "./CardImage.js";

function Card(props) {
  return (
    <div className="card">
      <div className="card-body">
        <CardImage />

        <CardText heading={props.title} subheading={props.desc}></CardText>
      </div>
    </div>
  );
}

export default Card;
