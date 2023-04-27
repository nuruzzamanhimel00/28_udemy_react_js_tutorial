import React from "react";
import classes from './AvailableMeals.module.css'
import Card from '../UI/Card'
import Mealitems from './MealItems/Mealitems'

const DUMMY_MEALS = [
    {
        id:'m1',
        name:'meal name 1',
        description:'In publishing and graphic design, Lorem ipsum is a placeholder text co ',
        price:122.3
    },
    {
        id:'m2',
        name:'meal name 2',
        description:'In publishing and graphic design, Lorem ipsum is a placeholder text co ',
        price:12.3
    },
    {
        id:'m3',
        name:'meal name 3',
        description:'In publishing and graphic design, Lorem ipsum is a placeholder text co ',
        price:122.3
    },
    {
        id:'m4',
        name:'meal name 4',
        description:'In publishing and graphic design, Lorem ipsum is a placeholder text co ',
        price:142.3
    },
    {
        id:'m5',
        name:'meal name 5',
        description:'In publishing and graphic design, Lorem ipsum is a placeholder text co ',
        price:123.3
    },
    {
        id:'m6',
        name:'meal name 6',
        description:'In publishing and graphic design, Lorem ipsum is a placeholder text co ',
        price:152.3
    },
];

const AvailableMeals = () =>{
    const mealList = DUMMY_MEALS.map(meal => 
    <Mealitems 
    id={meal.id} // this is new!
    key={meal.id} 
    name={meal.name} 
    description={meal.description}
    price={meal.price}
    />)
    return (
        <>
            <section className={classes.meals}>
                <Card>
                    <ul>
                        {mealList}
                    </ul>
                </Card>
            </section>
        </>
    );
}

export default AvailableMeals;