import './ExpenceItem.css'
import ExpenceDate from './ExpenceDate.js'

import React from 'react';
import './ExpenceItem.css'

const ExpenceItem = (props) =>{

    return (
        <div className='expence-item my-1'>
                   
                <div className="expence-item__date">
                   <ExpenceDate date={props.date} />
                
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