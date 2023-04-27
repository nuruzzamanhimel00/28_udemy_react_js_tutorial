import React from "react";
import classes from './Modal.module.css'
import ReactDOM from 'react-dom'

const BackDrop = () =>{
    return <div className={classes.backdrop}/>
}

const ModalOverlay = (props) =>{
    return (
        <div className={classes.modal}>
            <div  className={classes.modal}>{props.children}</div>
        </div>
    );
}

const Modal = (props) =>{
    const protalElement = document.getElementById('overlays');
    return (
        <>
            {ReactDOM.createPortal(<BackDrop />, protalElement)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, protalElement)}
        </>
    );
}

export default Modal;