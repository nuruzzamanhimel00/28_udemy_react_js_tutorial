import React, {useState} from "react";
import './App.css'
import CourceGoalForm from './components/CourceGoals/CourceGoalForm/CourceGoalForm.js'
import CourceGoalList from './components/CourceGoals/CourceGoalList/CourceGoalList.js'

const DUMMY_COURCE_GOALS = [
  { text: 'Do all exercises!', id: 'g1' },
  { text: 'Finish the course!', id: 'g2' }
];

function App() {

  const [ courseGoals, setCourseGoals ]= useState(DUMMY_COURCE_GOALS)

  const formInputDataHandler = (formInput) =>{
    let netCourseInput = { text: formInput, id: Math.random().toString() }
    // console.log(netCourseInput);
    setCourseGoals( (prevState) =>{
      return [
        netCourseInput,
        ...prevState
      ]
    } );
  }

  const deleteFormListHandler = (did) =>{
    if(courseGoals.length > 0){

      let filterCourseGoals = courseGoals.filter( (cg) => cg.id !== did );
      setCourseGoals(filterCourseGoals);
    }
  }

  return (
    <div className="cource_main" >
        <div className="cource_section ">
          <div className="goal-form mb-2" >
              <CourceGoalForm onFormInputdata={formInputDataHandler} />
          </div>
          <div className="goals">
            <CourceGoalList courseGoals={courseGoals} onDeleteFormList={deleteFormListHandler} />
          </div>
      </div>
       
    </div>
  );
}

export default App;
