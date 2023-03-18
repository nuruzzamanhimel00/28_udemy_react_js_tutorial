import React,{useState} from "react";
import Button from '../Ui/Button/Button.js'
import InvalidPopup from '../PopupModal/InvalidPopup/InvalidPopup.js'

const FormSection = (props) =>{
    const [inputData, setInputData] = useState({
        name:'',
        age:''
    });
    const [validate, setValidate] = useState({
        nameValide: true,
        ageValide: true,
        ageValideLessthen: true,
    });

    const nameChangeHandler = (e) =>{
        // setNameValide(true);
        setValidate(prevData =>{
            return {
                ...prevData,
                nameValide: true
            }
        });
        setInputData(prevData => {
            return {
                ...prevData,
                name:e.target.value
            }
        })
    }

    const ageChangeHandler = (e) =>{
        // setAgeValide(true);
        setValidate(prevData =>{
            return {
                ...prevData,
                ageValide: true
            }
        });
        if(parseInt(e.target.value) > 0){
            setValidate(prevData =>{
                return {
                    ...prevData,
                    ageValideLessthen: true
                }
            });
        }
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
        if(inputData.name.trim().length <= 0 ){
            setValidate(prevData =>{
                return {
                    ...prevData,
                    nameValide: false
                }
            });
            
            
        } 
        if(inputData.age.trim().length <= 0 ){
          
            setValidate(prevData =>{
                return {
                    ...prevData,
                    ageValide: false
                }
            });
       
        }
        if(inputData.name.trim().length > 0 && inputData.age.trim().length > 0){
            if(parseInt(inputData.age) < 1 ){
              
                setValidate(prevData =>{
                    return {
                        ...prevData,
                        ageValideLessthen: false
                    }
                });
            }else{
                props.onSetListInput(result);
                setInputData({
                    name:'',
                    age:''
                });
            }
           
        }
        
    }

    const validaitonResetHandler = ()=>{
        // console.log(boolen);
        setValidate({
            nameValide: true,
            ageValide: true,
            ageValideLessthen: true,
        });
    }

    return (
        <>
        <InvalidPopup validate={validate} onValidaitonReset={validaitonResetHandler} />
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