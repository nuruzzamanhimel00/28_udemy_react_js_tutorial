import React from "react";
import './CourceGoalList.css'
import CourceGoalItem from './CourceGoalItem.js'

const CourceGoalList = (props) => {

    const getDeleteCourseIdHandler = (dltId)=>{
        props.onGetDeleteId(dltId);
        // console.log(dltId);
    }

    let courseGoalData = (
        <div className="text-center  p-5" style={{ backgroundColor:"#920075" }}>
            <h1>Data Not Found</h1>
        </div>
    );

    if(props.courseGoalsList.length > 0){
        courseGoalData = props.courseGoalsList.map( (courseGoal, key) =>
            <CourceGoalItem
            key={key}
            message={courseGoal.message}
            onGetDeleteCourseId={getDeleteCourseIdHandler}
            id={courseGoal.id}
            />
        );
    }

    console.log(props.courseGoalsList);
    return (
        <ul className="goal-list">
            {courseGoalData}
            {/* <CourceGoalItem /> */}
        </ul>
    );
}

export default CourceGoalList;