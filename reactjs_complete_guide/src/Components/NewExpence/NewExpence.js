import React from 'react';
import './NewExpence.css'
import ExpenceForm from './ExpenceForm.js'

const NewExpence = (props) => {

    const saveExpenceDataHandler = (enterExpenceData)=>{
        const expenceData = {
            ...enterExpenceData,
        };
        props.onExpenceData(expenceData);
        // console.log('expenceData',expenceData);
    }

    return (
        <div>
            <ExpenceForm onSaveExpenceData={saveExpenceDataHandler} />
        </div>
    );
}

export default NewExpence;