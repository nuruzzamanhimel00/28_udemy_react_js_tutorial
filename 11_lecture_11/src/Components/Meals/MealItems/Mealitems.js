import React from "react";
import classes from './Mealitems.module.css'
import MealItemForm from './MealItemForm'

const Mealitems = (props) =>{
    const price = `$${props.price.toFixed(2)}`;
    return (
        <li className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <div>
                <MealItemForm id={props.id} />
            </div>
        </li>
    );
}

export default Mealitems;