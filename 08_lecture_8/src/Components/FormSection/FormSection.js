import React,{useState} from "react";
import Button from '../Ui/Button/Button.js'

const FormSection = (props) =>{
    const [inputData, setInputData] = useState({
        name:'',
        age:''
    })
    const nameChangeHandler = (e) =>{
        // console.log(e.target.value);
        setInputData(prevData => {
            return {
                ...prevData,
                name:e.target.value
            }
        })
    }

    const ageChangeHandler = (e) =>{
        setInputData((prevData) =>{
            return {
                ...prevData,
                age: e.target.value
            }
        })
    }

    const formSubmitHandler = (e)=>{
        e.preventDefault();
        let result = inputData;
        result['id'] = Math.random().toString()
        // console.log( result);
        props.onSetListInput(result);
        setInputData({
            name:'',
            age:''
        });
    }

    return (
        <>
        <div className='form-section'>
            <div className='card'>
            <div className='card-body'>
                <form onSubmit={formSubmitHandler}>
                <div className="form-group">
                    <label >Name</label>
                    <input type="text" value={inputData.name} onChange={nameChangeHandler} className="form-control"/>
                
                </div>
                <div className="form-group">
                    <label >age</label>
                    <input type="number" value={inputData.age} onChange={ageChangeHandler} className="form-control" />
                </div>
                
                <Button />
                </form>
            </div>
            </div>
        </div>
        </>
    );
}

export default FormSection;