import "./Card.css"
import React from "react";

const Card = (props) =>{
 const clases = "card " + props.className;
 console.log(clases)

    return <div className ={clases}>{props.children}</div>
  
}



export default Card;