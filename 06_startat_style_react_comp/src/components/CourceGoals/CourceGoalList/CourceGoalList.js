import React from "react";
import './CourceGoalList.css'
import CourceGoalItem from './CourceGoalItem.js'

const CourceGoalList = () =>{

    return (
        <ul className="goal-list">
            <CourceGoalItem />
        </ul>
    );
}

export default CourceGoalList;