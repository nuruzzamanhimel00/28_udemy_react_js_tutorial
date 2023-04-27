import React from "react";
import classes from './MealItemForm.module.css'
import Input from '../../UI/Input'

const MealItemForm = (props) =>{
    return (
        <>
            <form className={classes.form}>
                <Input label='Amount' input={{
                    id: 'amount_'+Math.random(),
                    type:'number',
                    min:"1",
                    max:"5",
                    value:"1",
                    
                }} />
                <button>+ Add</button>
            </form>
        </>
    );
}

export default MealItemForm;