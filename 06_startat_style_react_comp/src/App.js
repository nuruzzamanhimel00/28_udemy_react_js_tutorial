import React from "react";
import './App.css'
import CourceGoalForm from './components/CourceGoals/CourceGoalForm/CourceGoalForm.js'
import CourceGoalList from './components/CourceGoals/CourceGoalList/CourceGoalList.js'

function App() {
  return (
    <div className="cource_main" >
        <div className="cource_section ">
          <div className="goal-form mb-2" >
              <CourceGoalForm />
          </div>
          <div className="goals">
            <CourceGoalList />
          </div>
      </div>
       
    </div>
  );
}

export default App;
