import React, {useState} from "react";
import "./CourceGoalForm.css"
import Button from './Button.js'

const CourceGoalForm = (props) =>{

    const [coursInput, setCourseInput] = useState('');
    const [isinValid, setIsinValid ] = useState(false);

    const changeCourseInputHandler = (e) =>{
        e.preventDefault();
        if(coursInput.trim().length >= 0){
            setIsinValid(false);
        }
        setCourseInput(e.target.value);
    }

    const formSubmitHandler = (e) =>{
        e.preventDefault();
        if(coursInput.trim().length <= 0){
            setIsinValid(true);
            return false;
        }
        setIsinValid(false);
        props.onFormInputdata(coursInput);
        setCourseInput('');
    }

    return (
        <div className="card">
            <div className={`card-body ${isinValid ? 'invalide' : ''} `}>
                <form onSubmit={formSubmitHandler}>
                    <div className="mb-3">
                        <label className="form-label">
                        <b style={ {color: isinValid ? 'red' : 'black' } }>Cource Goal</b>
                        </label>
                        <input style={ 
                            {
                                border: isinValid ? '5px solid red' : '', 
                                background: isinValid ? 'red' : ''  
                            } 
                            } type="text" value={coursInput} onChange={changeCourseInputHandler} className="form-control" />
                    </div>
                        <Button  children={'Add Goals'} />
                </form>
            </div>
        </div>
    );
}

export default CourceGoalForm;