
import React, {useState} from 'react'
import './CourceGoalForm.css'
import Button from '../UI/Button.js'

const CourceGoalForm = (props) => {
    const [courseInput, setCourseInput] = useState('');
    const [isValid, setIsValid] = useState(true);

    const courseInputHandler = (event) =>{
        if(event.target.value.trim().length > 0){
            setIsValid(true);
        }
        setCourseInput(event.target.value);
        // console.log(event.target.value);
    }

    const courseGlobalSubmitHandler = (e) => {
        e.preventDefault();
        
        if(courseInput.trim().length > 0){
            setCourseInput('');
            setIsValid(true);
            props.onFormDataStore(courseInput);
        }else{
            setIsValid(false);
        }
    }

    return (
        <div className="card">
        <div className={`card-body ${!isValid ? 'invalied' : ''} `}
        >
            <form onSubmit={courseGlobalSubmitHandler} >
                <div className="mb-3">
                    <label className="form-label">
                    <b 
                    style={
                        {
                            color: isValid ? '#000' : "red"
                        }
                    } 
                    >Cource Goal</b>
                    </label>
                    <input
                    style={
                        {
                            borderColor: !isValid ? 'red' : '',
                            backgroundColor: !isValid ? 'red' : ''
                        }
                    }
                    onChange={courseInputHandler} type="text" value={courseInput}  className="form-control" />
                </div>
                <Button type="submit" text="Add Goal" />
                {/* <button type="submit" className="button">Add Goal</button> */}
            </form>
        </div>
    </div>
    );
}

export default CourceGoalForm;