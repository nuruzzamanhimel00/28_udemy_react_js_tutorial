import React from 'react';
import './ExpenceDate.css'

const ExpenceDate = (props) => {
    const month = props.date.toLocaleDateString('en-us',{ month: 'short'});
    const year = props.date.toLocaleDateString('en-us',{ year: 'numeric'});
    const day = props.date.toLocaleDateString('en-us',{ day: 'numeric'});
    return (
        <div className='expence-item__date__item'>
            <div>{month}</div>
            <div>{year}</div>
            <div>{day}</div>
        </div>
    );
}

export default ExpenceDate;