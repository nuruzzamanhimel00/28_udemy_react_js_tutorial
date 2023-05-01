import React from "react";
import classes from './Modal.module.css'
import ReactDOM from 'react-dom'

const BackDrop = (props) =>{
    return <div className={classes.backdrop}  onClick={props.onClose}/>
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
            {ReactDOM.createPortal(<BackDrop onClose={props.onClose} />, protalElement)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, protalElement)}
        </>
    );
}

export default Modal;