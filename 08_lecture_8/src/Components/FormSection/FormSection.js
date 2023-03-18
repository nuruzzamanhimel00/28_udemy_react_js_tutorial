import React,{useState} from "react";
import Button from '../Ui/Button/Button.js'
import InvalidPopup from '../PopupModal/InvalidPopup/InvalidPopup.js'
import Card from '../Ui/Card/Card.js'

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

            <Card className={`card`}>
                <div className='card-body'>
                    <form onSubmit={formSubmitHandler}>
                    <div className="form-group">
                        <label htmlFor="nameInput" >Name</label>
                        <input type="text" value={inputData.name} onChange={nameChangeHandler} className="form-control" id="nameInput"/>
                    
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputAge" >age</label>
                        <input type="number" value={inputData.age} onChange={ageChangeHandler} className="form-control" id="inputAge" />
                    </div>
                    
                    <Button className="btn btn-primary"  type="submit" children={`submit`} title="Click here for submit" />
                    </form>
                </div>
            </Card>
        </div>
        </>
    );
}

export default FormSection;