import React from "react";
import styles from './InvalidPopup.module.css'

const InvalidPopup = (props) =>{

    let modalOpenClass = '';
    if(!props.validate.ageValide || !props.validate.ageValideLessthen || !props.validate.nameValide ){
        modalOpenClass = 'open'
    }
    let invalidMessage = "";
    if(!props.validate.ageValide || !props.validate.nameValide ){
        invalidMessage = 'Field can not empty!!';
    }else if(!props.validate.ageValideLessthen){
        invalidMessage = "Please enter valid age (>0)";
    }

    const closeModalHandler = (e) =>{
        e.preventDefault();
        
        props.onValidaitonReset();
    }

    return (
        <>
            {/* <div  className="overlay open"> */}
            <div  className={`${styles.overlay} ${modalOpenClass === 'open' ? styles.open : ''} `}>
            {/* <div  className={`overlay ${modalOpenClass} `}> */}
                <div className={`${styles.popup}`}>
                
                    <h2>Invalid Input</h2>
                    <a href="test" className={`${styles.close}`} onClick={closeModalHandler} >&times;</a>
                    <div className={`${styles.content}`}>
                       {invalidMessage}
                    </div>
                </div>
            </div>
        </>
    );
}

export default InvalidPopup;