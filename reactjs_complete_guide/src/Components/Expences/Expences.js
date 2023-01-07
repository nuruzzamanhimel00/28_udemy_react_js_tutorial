
// import React, { useState } from 'react';
import './ExpenceItem.css'
import ExpenceItem from './ExpenceItem.js'
import Card from '../UI/Card.js'
import NewExpence from '../NewExpence/NewExpence.js'

const Expences = () =>{
    
    const expences = [
        {
          id:1,
          title:'first title',
          amount:200,
          date: new Date(2018, 11, 24)
        },
        {
          id:2,
          title:'2nd title',
          amount:300,
          date: new Date(2038, 11, 24)
        },
        {
          id:3,
          title:'3rd title',
          amount:400,
          date: new Date(2048, 11, 24)
        },
        {
          id:4,
          title:'5th title',
          amount:500,
          date: new Date(2015, 11, 24)
        },
        {
          id:5,
          title:'6th title',
          amount:600,
          date: new Date(2066, 11, 24)
        },
      ];
      const saveExpenceDataHandler = (enterExpenceData)=>{
        const expenceData = {
            ...enterExpenceData,
        };
        expences.unshift(expenceData);
        console.log('expenceData main',expenceData, expences);
    }
    return (
      <Card  className='expence_item_main'>
      <NewExpence onExpenceData={saveExpenceDataHandler} />
      <ExpenceItem 
      title={expences[0].title} 
      amount={expences[0].amount}
      date={expences[0].date}/>
      
      <ExpenceItem 
      title={expences[1].title} 
      amount={expences[1].amount}
      date={expences[1].date}/>
      
      <ExpenceItem 
      title={expences[2].title} 
      amount={expences[2].amount}
      date={expences[2].date}/>
      
      <ExpenceItem 
      title={expences[3].title} 
      amount={expences[3].amount}
      date={expences[3].date}/>
      
    </Card>
        
    );
}

export default Expences;