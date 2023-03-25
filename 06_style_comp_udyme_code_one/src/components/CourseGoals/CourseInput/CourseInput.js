import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import styles from './CourseInput.module.css';
// import {FormControl} from '../../style/Common.style.js'

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
      {/* <FormControl isValide={isValide} > */}
      {/* <FormControl className={`${!isValide ? 'invalid' : '' }`}> */}
      {/* <div className={`form-control ${!isValide ? 'invalid' : '' } `}> */}
      <div className={`${styles['form-control']} ${!isValide ? styles.invalid : '' } `}>
        <label 
          style={
            {
              color: !isValide ? 'red' : ''
            }
          }
        >Course Goal</label>
        <input type="text" value={enteredValue} onChange={goalInputChangeHandler}
          style={
            {
              background: !isValide ? 'red' : ''
            }
          }
        />
      </div>
      <Button type="submit" title={`This is submit button`} children={`Add Goals`}
      ></Button>
    </form>
  );
};

export default CourseInput;
