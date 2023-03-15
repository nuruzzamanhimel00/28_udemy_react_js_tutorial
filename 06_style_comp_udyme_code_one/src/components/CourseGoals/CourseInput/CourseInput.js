import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValide, setIsValide] = useState(true);

  const goalInputChangeHandler = event => {
    setIsValide(true);
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if(enteredValue.trim().length <= 0){
      setIsValide(false);
      return false;
    }
    setEnteredValue('');
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isValide ? 'invalid' : '' } `}>
        <label 
          style={
            {
              color: !isValide ? 'red' : ''
            }
          }
        >Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler}
          style={
            {
              background: !isValide ? 'red' : ''
            }
          }
        />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
