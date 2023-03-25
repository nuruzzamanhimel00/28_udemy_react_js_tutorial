import React from "react";
import './CourceGoalItem.css'

const CourceGoalItem = (props) => {

    const courseDeleteHandler = () =>{
        props.onGetDeleteCourseId(props.id);
    }

    return (
        <li onClick={courseDeleteHandler} className="goal-item">{props.message}</li>
    );
}

export default CourceGoalItem ;