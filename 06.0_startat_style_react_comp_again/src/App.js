import React, {useState} from 'react'
import './App.css'
import CourceGoalForm from './components/CourceGoalForm/CourceGoalForm.js'
import CourceGoalList from './components/CourceGoalList/CourceGoalList.js'

const DUMMY_COURSE_DATA = [
  {
    message: 'courst list 1', id: 'g1',
  },
  {
    message: 'courst list 2', id: 'g2',
  }
];

const App = ()=> {

  const [courseGoals, setCourseGoals ] = useState(DUMMY_COURSE_DATA);

  const formDataStoreHandler = (data) =>{
    let courseData = {
      message: data, id: Math.random().toString(),
    };

    setCourseGoals( (prevState) =>{
      return [
        courseData,
        ...prevState
      ]
    } );
  }

  const getDeleteIdHandler = (dltId) =>{
    let courseGoalItem = courseGoals.filter( (item) => item.id !== dltId );
    setCourseGoals(courseGoalItem);
    // console.log(courseGoalItem);
    // if(index > -1){
    //   var courseGoalItem = courseGoals.splice(index,1);
    //   setCourseGoals(courseGoalItem);
    // }
    // console.log(index);
    
  }

  return (
    <div className="cource_main" >
      <div className="cource_section ">
        <div className="goal-form mb-2" >
            <CourceGoalForm onFormDataStore={formDataStoreHandler} />
        </div>
        <div className="goals">
          <CourceGoalList
          courseGoalsList={courseGoals}
          onGetDeleteId={getDeleteIdHandler}
          />
        </div>
    </div>
    
  </div>
  );
}

export default App;
