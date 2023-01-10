
import React, { useState } from 'react';
import './ExpenceItem.css'
import ExpenceItem from './ExpenceItem.js'
import Card from '../UI/Card.js'
import NewExpence from '../NewExpence/NewExpence.js'
import ExpencesFilter from './ExpencesFilter.js'

const DUMMY_EXPENCES = [
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

const Expences = () =>{

    const [expences, setExpences] = useState(DUMMY_EXPENCES);
    
      const saveExpenceDataHandler = (enterExpenceData)=>{
        // const expenceData = {
        //     ...enterExpenceData,
        // };
        // expences.unshift(expenceData);
        setExpences((prevExpences)=>{
          return [ enterExpenceData, ...prevExpences  ]
        });
    
    }

    const [ selectYear, setSelectYear ] = useState('2023');

    const fiterChangeHandler = (selectYear) =>{
      setSelectYear(selectYear);
    }

    return (
      <Card  className='expence_item_main'>
      <NewExpence onExpenceData={saveExpenceDataHandler} />

      <ExpencesFilter selectedYear={selectYear} onChangeFilter={fiterChangeHandler} />

      { expences.map( (expence) => <ExpenceItem title={expence.title} amount={expence.amount} date={expence.date} /> ) }

   
      
    </Card>
        
    );
}

export default Expences;