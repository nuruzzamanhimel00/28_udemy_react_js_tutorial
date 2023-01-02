import React, {useState} from 'react';

const ExpenceForm = () =>{

    // const [enterTitle, setEnterTitle] = useState('');
    // const [enterAmount, setEnterAmount] = useState('');
    // const [enterDate, setEnterDate] = useState('');

    const [useInput, setUseInput] = useState({
        enterTitle : '',
        enterAmount: '',
        enterDate: ''
    });

    const onTitleChangeHandler = (event) =>{
        setUseInput({
            ...useInput,
            enterTitle: event.target.value
        });
        // setEnterTitle(event.target.value);
        // console.log(event.target.value);
    }

    const onAmountChangeHandler = (event) =>{
        setUseInput({
            ...useInput,
            enterAmount: event.target.value
        });
        // setEnterAmount(event.target.value);
    }

    const onDateChangeHandler = (event) =>{
        setUseInput({
            ...useInput,
            enterDate: event.target.value
        });
        // setEnterDate(event.target.value);
    }

    return (
        <div>
            <form className="row">
                <div className="form-group col-md-6">
                    <label for="exampleInputEmail1">Title</label>
                    <input type="email" onChange={onTitleChangeHandler} className="form-control" aria-describedby="emailHelp" /> 
                </div>
                <div className="form-group col-md-6">
                    <label for="amount">Amount</label>
                    <input type="number" onChange={onAmountChangeHandler} className="form-control" min='0.01' step="0.01" /> 
                </div>
                <div className="form-group col-md-6">
                    <label for="amount">Date</label>
                    <input type="date" onChange={onDateChangeHandler} className="form-control" min='2022-12-31' max="2025-12-31" /> 
                    <button type="submit" className="btn btn-primary mt-3">Add Exponce</button>
                </div>
                
                    
            </form>
        </div>
    );
}

export default ExpenceForm;