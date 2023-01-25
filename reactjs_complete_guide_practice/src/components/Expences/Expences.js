import React,{ useState } from 'react';
import './Expences.css'
import ExpencesList from './ExpencesList.js'
import Card from '../UI/Card.js'
import ExpenceFilter from './ExpenceFilter.js'
import NewExpence from './NewExpence.js'
import ExpenceChart from './ExpenceChart.js'

const DUMMY_EXPENCES = [
  {
    id: 1,
    title: 'first title',
    amount: 200,
    date: new Date(2018, 11, 24)
  }, {
    id: 2,
    title: '2nd title',
    amount: 300,
    date: new Date(2023, 6, 24)
  }, {
    id: 3,
    title: '3rd title',
    amount: 400,
    date: new Date(2019, 5, 24)
  }, {
    id: 4,
    title: '5th title',
    amount: 500,
    date: new Date(2018, 4, 24)
  }, {
    id: 5,
    title: '6th title',
    amount: 600,
    date: new Date(2023, 3, 24)
  }, {
    id: 6,
    title: '7th title',
    amount: 800,
    date: new Date(2023, 2, 24)
  }
  , {
    id: 7,
    title: '7th title',
    amount: 400,
    date: new Date(2023, 2, 24)
  }
  , {
    id: 8,
    title: '7th title',
    amount: 400,
    date: new Date(2023, 1, 24)
  }
];

const Expences = () =>{

    const [expences, setExpences] = useState(DUMMY_EXPENCES);

    const [selectYear, setSelectYear] = useState("2023");

    const ChangeSelectFilterHandler = (year) =>{
      setSelectYear(year);
    }

    const filterExpence = expences.filter( (expence) =>{
      return expence.date.getFullYear().toString() === selectYear;
    } )

    const ExpenceFormDataHandler = (expenceData) => {
      setExpences( (prevState) =>{
        return [
          expenceData,
          ...prevState
        ]
      } )
    }

    return (
        <Card className="expence_item_main">
          
          <NewExpence onExpenceFormData={ExpenceFormDataHandler} />

     

          <ExpenceFilter selectYear={selectYear} onChangeSelectFilter={ChangeSelectFilterHandler} />

          <ExpenceChart expences={filterExpence} />

          <ExpencesList items={filterExpence} />
         
        </Card>
    )
}

export default Expences;