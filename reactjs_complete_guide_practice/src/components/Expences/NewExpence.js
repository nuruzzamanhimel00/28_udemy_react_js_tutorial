import React from "react";
import ExpenceForm from './ExpenceForm.js'

const NewExpence = (props) =>{

    const formSubmitHandler = (expenceFormData) =>{
        props.onExpenceFormData(expenceFormData);
        // console.log(expenceFormData);
    }

    return (<div>
        <ExpenceForm onFormSubmit={formSubmitHandler} />
    </div>);
}

export default NewExpence;