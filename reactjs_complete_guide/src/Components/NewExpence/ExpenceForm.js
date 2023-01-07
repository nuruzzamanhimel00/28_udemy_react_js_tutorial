import React, {useState} from 'react';

const ExpenceForm = (props) =>{

    // const [enterTitle, setEnterTitle] = useState('');
    // const [enterAmount, setEnterAmount] = useState('');
    // const [enterDate, setEnterDate] = useState('');

    const [useInput, setUseInput] = useState({
        enterTitle : '',
        enterAmount: '',
        enterDate: ''
    });

    const onTitleChangeHandler = (event) =>{
        // setUseInput({
        //     ...useInput,
        //     enterTitle: event.target.value
        // });
        // or
        setUseInput((prevState)=>{
            return {
                ...prevState,
                enterTitle: event.target.value
            }
        });

        // setEnterTitle(event.target.value);
        // console.log(event.target.value);
    }

    const onAmountChangeHandler = (event) =>{
        // setUseInput({
        //     ...useInput,
        //     enterAmount: event.target.value
        // });
        //or
        setUseInput((prevState)=>{
            return {
                ...prevState,
                enterAmount: event.target.value
            }
        });
        // setEnterAmount(event.target.value);
    }

    const onDateChangeHandler = (event) =>{
        // setUseInput({
        //     ...useInput,
        //     enterDate: event.target.value
        // });
        //or
        setUseInput((prevState)=>{
            return {
                ...prevState,
                enterDate: event.target.value
            }
        });
        // setEnterDate(event.target.value);
    }

    const onSubmitHandler = (event) =>{
        event.preventDefault();
        const expenceForm = {
            id: Math.random() ,
            title:useInput.enterTitle,
            amount:useInput.enterAmount,
            date: new Date(useInput.enterDate)
        };
        setUseInput({
            enterTitle : '',
            enterAmount: '',
            enterDate: ''
        });
        props.onSaveExpenceData(expenceForm);
        console.log('expenceForm',expenceForm);
    }

    return (
        <div>
            <form className="row" onSubmit={onSubmitHandler} >
                <div className="form-group col-md-6">
                    <label >Title</label>
                    <input type="text" value={useInput.enterTitle} onChange={onTitleChangeHandler} className="form-control" aria-describedby="emailHelp" /> 
                </div>
                <div className="form-group col-md-6">
                    <label >Amount</label>
                    <input type="number" value={useInput.enterAmount} onChange={onAmountChangeHandler} className="form-control" min='0.01' step="0.01" /> 
                </div>
                <div className="form-group col-md-6">
                    <label >Date</label>
                    <input type="date" value={useInput.enterDate} onChange={onDateChangeHandler} className="form-control" min='2022-12-31' max="2025-12-31" /> 
                    <button type="submit" className="btn btn-primary mt-3">Add Exponce</button>
                </div>
                
                    
            </form>
        </div>
    );
}

export default ExpenceForm;