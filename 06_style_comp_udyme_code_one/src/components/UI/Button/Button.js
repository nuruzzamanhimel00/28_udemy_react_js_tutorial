import React from 'react';

// import './Button.css';
import styles from './Button.module.css';

// import {Button} from '../../style/Button.style.js'

const Button = props => {
  return (
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
