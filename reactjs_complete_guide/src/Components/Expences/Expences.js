import React, {useState} from 'react';
import './ExpenceItem.css'
import ExpencesList from './ExpencesList.js'
import Card from '../UI/Card.js'
import NewExpence from '../NewExpence/NewExpence.js'
import ExpencesFilter from './ExpencesFilter.js'
import './Expences.css'
import ExpencesChart from './ExpencesChart.js'

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
    amount: 600,
    date: new Date(2023, 2, 24)
  }
];

const Expences = () => {

  const [expences,
    setExpences] = useState(DUMMY_EXPENCES);

  const saveExpenceDataHandler = (enterExpenceData) => {
    // const expenceData = {     ...enterExpenceData, };
    // expences.unshift(expenceData);
    setExpences((prevExpences) => {
      return [
        enterExpenceData, ...prevExpences
      ]
    });

  }

  const [selectYear,
    setSelectYear] = useState('2023');

  const fiterChangeHandler = (selectYear) => {
    setSelectYear(selectYear);
  }

  const filterExpences = expences.filter((item) => {
    // console.log(selectYear, item.date.getFullYear().toString())
    return item
      .date
      .getFullYear()
      .toString() === selectYear;
  });

  
  return (
    <Card className='expence_item_main'>
      <NewExpence onExpenceData={saveExpenceDataHandler}/>

      <ExpencesFilter selectedYear={selectYear} onChangeFilter={fiterChangeHandler}/> 

      <ExpencesChart expences={filterExpences} />

      <ExpencesList items={filterExpences} />

      {/* {expenceContent} */}

    </Card>

  );
}

export default Expences;