import React, {useState} from "react";
import "./CourceGoalForm.css"
import Button from './Button.js'
import styled from 'styled-components'


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

    const FormControl = styled.div`
      & input:focus {
            outline-color: initial;
            background-image: initial;
            background-color: rgb(74, 8, 52) !important;
            border-color: rgb(213, 0, 143) !important;
        }
        & input{
            color:#fff !important;
        }
    `;

   

    return (
        <div className="card form_card">
            <div  className={`card-body ${isinValid ? 'invalide' : ''} `}>
            {/* <cardBody className={`card-body ${isinValid ? 'invalide' : ''} `}> */}
                <form onSubmit={formSubmitHandler}>
                    <FormControl className="mb-3">
                        <label className="form-label">
                        <b style={ {color: isinValid ? 'red' : 'black' } }>Cource Goal</b>
                        </label>
                        <input style={ 
                            {
                                border: isinValid ? '5px solid red' : '', 
                                background: isinValid ? 'red' : ''  
                            } 
                            } type="text" value={coursInput} onChange={changeCourseInputHandler} className="form-control" />
                    </FormControl>
                        <Button  children={'Add Goals'} />
                </form>
            </div>
        </div>
    );
}

export default CourceGoalForm;