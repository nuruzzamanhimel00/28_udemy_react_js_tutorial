import React, { useState, useEffect, useReducer } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const emailReducer = (state, action) =>{
  if(action.type === "USER_INPUT"){
     return {value:action.val, isValide:action.val.includes('@')}
  }
  if(action.type === 'USER_BLUR'){
     return {value:state.value, isValide:state.value.length >0? state.value.includes('@'): undefined}
  }
  return {value:'', isValide:undefined}
}

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {value:'', isValide:undefined})
    // console.log('Before Runngin!!');
    useEffect(()=>{
      console.log('Running !!');
      return ()=>{
        console.log("CLEAN UP RUNNING !!");
      }
    },[enteredPassword]);

  // useEffect(()=>{
   
  //   const identifier = setTimeout(() => {
  //     console.log('checking for validity!!')
  //     setFormIsValid(
  //       enteredEmail.includes('@') && enteredPassword.trim().length > 6
  //     );
  //   }, 1000);

  //   //cleanup funtion
  //   return ()=>{
  //     // console.log('clean up');
  //     clearTimeout(identifier);
  //   }

  // },[enteredEmail,enteredPassword])

  const emailChangeHandler = (event) => {
    dispatchEmail({type:"USER_INPUT", val:event.target.value});
    // setEnteredEmail(event.target.value);
    // console.log("emailChangeHandler=",event.target.value.includes('@') && enteredPassword.trim().length > 6);
    setFormIsValid(
      event.target.value.includes('@') && enteredPassword.trim().length > 6
    );
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);

    setFormIsValid(
      event.target.value.trim().length > 6 && emailState.isValide
    );
    // setFormIsValid(
    //   event.target.value.trim().length > 6 && enteredEmail.includes('@')
    // );
  };

  const validateEmailHandler = () => {
    // setEmailIsValid(enteredEmail.includes('@'));
    // setEmailIsValid(emailState.isValide);
    dispatchEmail({type:"USER_BLUR"});
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, enteredPassword);
    // props.onLogin(enteredEmail, enteredPassword);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValide === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
