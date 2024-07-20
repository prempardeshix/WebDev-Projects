import "./Card.css";
import { useState } from "react";

function Card(props) {
  const info200 = props.info.substring(0, 200) + "...";

  const [readMore, setReadMore] = useState(false);

  function toggleHandler() {
    setReadMore(!readMore);
  }

  const description = readMore ? props.info : info200;



  return (
    <div className="card">
      <div> {props.image}</div>
      <div> {props.name}</div>
      <div>{props.rate}</div>
      <div className="info">
        {description}
        <span className="span" onClick={toggleHandler}>
          {readMore ? "Show Less" : "Read More"}
        </span>
      </div>

      <button className="interest" >
        Not Interested
      </button>
    </div>
  );
}

export default Card;
