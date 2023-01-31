import React from "react";
import "./CourceGoalItem.css";


const CourceGoalItem = (props) => {

    const listDeleteHandler = () =>{
        props.onGetDeleteId(props.id);
        // console.log(props.id);
    }

    return (
        <li onClick={listDeleteHandler} className="goal-item">{props.text}</li>
    );
}

export default CourceGoalItem;