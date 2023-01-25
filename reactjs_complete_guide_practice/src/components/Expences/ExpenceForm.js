import React, {useState} from "react";

const ExpenceForm = (props) =>{

    const [useInput, setUseInput] = useState({
        title: '',
        amount:'',
        date:''
    });
    const [addExpenceForm, setAddExpenceForm] = useState(false);

    const titleChangeHandler = (e) =>{

        setUseInput((preState)=>{
            return {
                ...preState,
                title: e.target.value
            }
        });
        // console.log(e.target.value);
    }
    const amountChangeHandler = (e) =>{

        setUseInput((preState)=>{
            return {
                ...preState,
                amount: e.target.value
            }
        });
        // console.log(e.target.value);
    }
    const dateChangeHandler = (e) =>{

        setUseInput((preState)=>{
            return {
                ...preState,
                date: e.target.value
            }
        });
        // console.log(e.target.value);
    }

    const formSubmitHandler = (e) =>{
        e.preventDefault();
        const expenceForm = {
            id: Math.random() ,
            title:useInput.title,
            amount:useInput.amount,
            date: new Date(useInput.date)
        };
        props.onFormSubmit(expenceForm);
        setUseInput({
            title: '',
            amount:'',
            date:''
        });
        setAddExpenceForm(false);
        // console.log(expenceForm);
    }

    const addNewExpenceHandler = () =>{
        setAddExpenceForm(true);
    }

    let expenceForm = (
        <div className="add_expence_button text-center p-4">
            <button onClick={addNewExpenceHandler} className="btn btn-primary btn-lg">Add New Expence</button>
        </div>
    );
    if(addExpenceForm){
        expenceForm = (  <form onSubmit={formSubmitHandler} className="row" >
        <div className="form-group col-md-6">
            <label >Title</label>
            <input type="text" value={useInput.title} onChange={titleChangeHandler}  className="form-control" aria-describedby="emailHelp" /> 
        </div>
        <div className="form-group col-md-6">
            <label >Amount</label>
            <input type="number" value={useInput.amount} onChange={amountChangeHandler}  className="form-control" min='0.01' step="0.01" /> 
        </div>
        <div className="form-group col-md-6">
            <label >Date</label>
            <input type="date" value={useInput.date}  onChange={dateChangeHandler} className="form-control" min='2022-12-31' max="2025-12-31" /> 
            <button type="submit" className="btn btn-primary mt-3">Add Exponce</button>
        </div>
        
            
    </form>);
    }

    return (<div className="expence_form m-2">
        {expenceForm}
    </div>);

}

export default ExpenceForm;