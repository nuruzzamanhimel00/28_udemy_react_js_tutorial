import React from 'react'
import './App.css'
import CourceGoalForm from './components/CourceGoalForm/CourceGoalForm.js'
import CourceGoalList from './components/CourceGoalList/CourceGoalList.js'

const DUMMY_COURSE_DATA = [
  {
    messge: 'courst list 1', id: 'g1',
  },
  {
    messge: 'courst list 2', id: 'g2',
  }
];

function App() {

  const formDataStoreHandler = (data) =>{
    console.log(data);
  }

  return (
    <div className="cource_main" >
      <div className="cource_section ">
        <div className="goal-form mb-2" >
            <CourceGoalForm onFormDataStore={formDataStoreHandler} />
        </div>
        <div className="goals">
          <CourceGoalList />
        </div>
    </div>
    
  </div>
  );
}

export default App;
