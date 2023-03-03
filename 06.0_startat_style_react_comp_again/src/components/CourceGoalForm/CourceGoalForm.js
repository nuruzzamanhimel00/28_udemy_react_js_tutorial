
import React, {useState} from 'react'
import './CourceGoalForm.css'

const CourceGoalForm = (props) => {
    const [courseInput, setCourseInput] = useState('');

    const courseInputHandler = (event) =>{
        setCourseInput(event.target.value);
        // console.log(event.target.value);
    }

    const courseGlobalSubmitHandler = (e) => {
        e.preventDefault();
        
        if(courseInput.trim().length > 0){
            props.onFormDataStore(courseInput);
        }
    }

    return (
        <div className="card">
        <div className="card-body">
            <form onSubmit={courseGlobalSubmitHandler} >
                <div className="mb-3">
                    <label className="form-label">
                    <b >Cource Goal</b>
                    </label>
                    <input onChange={courseInputHandler} type="text"  className="form-control" />
                </div>
                <button type="submit" className="button">Add Goal</button>
            </form>
        </div>
    </div>
    );
}

export default CourceGoalForm;