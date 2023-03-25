import React from 'react';
import ReactDOM from 'react-dom'

import Card from './Card';
import Button from './Button';
import classes from './ErrorModal.module.css';

const BackDrop = (props) =>{
  return (
    <div className={classes.backdrop} onClick={props.onConfirm} />
  );
}

const ModalOverLay = (props) =>{
  return (
    <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.onConfirm}>Okay</Button>
        </footer>
      </Card>
  );
}

const ErrorModal = (props) => {
  return (
    <>
     {ReactDOM.createPortal(<BackDrop onConfirm={props.onConfirm}/>, document.getElementById('backdrop-root') )}

     {
      ReactDOM.createPortal( 
      <ModalOverLay
        title={props.title}
        message={props.message}
        onConfirm={props.onConfirm}
      />, document.getElementById('overlay-root') )
     }
    </>
  );
};

// const ErrorModal = (props) => {
//   return (
//     <>
//       <div className={classes.backdrop} onClick={props.onConfirm} />
//       <Card className={classes.modal}>
//         <header className={classes.header}>
//           <h2>{props.title}</h2>
//         </header>
//         <div className={classes.content}>
//           <p>{props.message}</p>
//         </div>
//         <footer className={classes.actions}>
//           <Button onClick={props.onConfirm}>Okay</Button>
//         </footer>
//       </Card>
//     </>
//   );
// };

export default ErrorModal;
