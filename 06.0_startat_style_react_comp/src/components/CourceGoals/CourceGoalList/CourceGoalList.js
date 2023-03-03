import React from "react";
import './CourceGoalList.css'
import CourceGoalItem from './CourceGoalItem.js'

const CourceGoalList = (props) =>{

   
    const getDeleteIdHandler = (did)=>{
        props.onDeleteFormList(did);
        // console.log(did);
    }
    
    let courseGoalData = (
        <div className="text-center  p-5" style={{ backgroundColor:"#920075" }}>
            <h1>Data Not Found</h1>
        </div>
    );
    if(props.courseGoals.length > 0){
        courseGoalData = props.courseGoals.map( (courseGoal, index) =>
        <CourceGoalItem
        key={index}
        text={courseGoal.text}
        id={courseGoal.id}
        onGetDeleteId={getDeleteIdHandler}
        />
        );
    }

    return (

        <ul className="goal-list">
            {courseGoalData}
        </ul>
    );
}

export default CourceGoalList;