import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
// import { Button } from '../../Style/Button.style';
// import './CourseInput.css';
import {FormControl} from '../../Style/Common.style'

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = event => {
    setIsValid(true);
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if(enteredValue.trim().length <=0){
      setIsValid(false);
      return false;
    }else{
      setEnteredValue('');
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <FormControl isValid={isValid} >
      {/* <FormControl className={` ${!isValid? 'invalid' : ''}`}> */}
      {/* <div className={`form-control ${!isValid? 'invalid' : ''} `}> */}
        <label
          style={ {
            color: !isValid ? 'red' : "#fff"
          }}
        >Course Goal</label>
        <input type="text" value={enteredValue} onChange={goalInputChangeHandler}
          style={{ 
            backgroundColor: !isValid ? 'red' : "#fff",
            border: !isValid ? '1px solid red' : ''
           }}
        />
      </FormControl>
      <Button type="submit" title={`This is submit button`} children={`Add Goal`} ></Button>
    </form>
  );
};

export default CourseInput;
