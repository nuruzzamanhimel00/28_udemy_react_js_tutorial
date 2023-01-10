// import React, { useState } from 'react';
import './ExpenceItem.css'
import ExpanceDate from './ExpenceDate.js'

const ExpenceItem = (props) => {

    

   
 
    return (
            <div className='expence-item'>
                {/* <div className="expence-item__date">{props.date.toDateString()}</div> */}
                <div className="expence-item__date">
                    <ExpanceDate date={props.date} />
                   
                </div>
                <div className='expence-item__description'>
                    <h2>{props.title}</h2>
                    <div>
                        <div className='expence-item__price'>${props.amount}</div>
                      
                    </div>
                    
                </div>
            </div>
        );
}

export default ExpenceItem;
