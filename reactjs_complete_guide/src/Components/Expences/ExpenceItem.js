import React, { useState } from 'react';
import './ExpenceItem.css'
import ExpanceDate from './ExpenceDate.js'

const ExpenceItem = (props) => {

    let [title, setTItle] =  useState(props.title);

    console.log('expence item executed !!');

    const clickHandler = () =>{
        setTItle("Update title !!");
        // console.log(title);
    }
 
    return (
            <div className='expence-item'>
                {/* <div className="expence-item__date">{props.date.toDateString()}</div> */}
                <div className="expence-item__date">
                    <ExpanceDate date={props.date} />
                   
                </div>
                <div className='expence-item__description'>
                    <h2>{title}</h2>
                    <div>
                        <div className='expence-item__price'>${props.amount}</div>
                        <button onClick={ clickHandler } >Click</button>
                    </div>
                    
                </div>
            </div>
        );
}

export default ExpenceItem;
