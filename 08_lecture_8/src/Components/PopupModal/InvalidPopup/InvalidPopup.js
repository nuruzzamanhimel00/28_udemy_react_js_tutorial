import React from "react";
import './InvalidPopup.css'

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
            <div  className={`overlay ${modalOpenClass} `}>
                <div className="popup">
                    <h2>Invalid Input</h2>
                    <a href="test" className="close" onClick={closeModalHandler} >&times;</a>
                    <div className="content">
                       {invalidMessage}
                    </div>
                </div>
            </div>
        </>
    );
}

export default InvalidPopup;