import React, {useState} from 'react';
import './ExpenceItem.css'
import ExpenceItem from './ExpenceItem.js'
import Card from '../UI/Card.js'
import NewExpence from '../NewExpence/NewExpence.js'
import ExpencesFilter from './ExpencesFilter.js'
import './Expences.css'

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
    date: new Date(2023, 11, 24)
  }, {
    id: 3,
    title: '3rd title',
    amount: 400,
    date: new Date(2019, 11, 24)
  }, {
    id: 4,
    title: '5th title',
    amount: 500,
    date: new Date(2018, 11, 24)
  }, {
    id: 5,
    title: '6th title',
    amount: 600,
    date: new Date(2023, 11, 24)
  }, {
    id: 6,
    title: '7th title',
    amount: 600,
    date: new Date(2023, 11, 24)
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

  let expenceContent = (<div className="card">
    <div className="card-body">
      <div className="no-data-found">
      <h1 >No Expences Found</h1>
      </div>
    
    </div>
  </div>);
  if(filterExpences.length > 0){
    expenceContent = filterExpences.map((expence) => <ExpenceItem
     key={expence.id}
     title={expence.title}
     amount={expence.amount}
     date={expence.date}/>);
  }

  return (
    <Card className='expence_item_main'>
      <NewExpence onExpenceData={saveExpenceDataHandler}/>

      <ExpencesFilter selectedYear={selectYear} onChangeFilter={fiterChangeHandler}/> 

      {expenceContent}

  
      {/* //two way:-  */}
      {/* {  filterExpences.length === 0 ? (<div className="card">
          <div className="card-body">
            <div className="no-data-found">
            <h1 >No Expences Found</h1>
            </div>
          
          </div>
        </div> ) : 
        (filterExpences.length > 0 &&
          filterExpences.map((expence) => <ExpenceItem
           key={expence.id}
           title={expence.title}
           amount={expence.amount}
           date={expence.date}/>))  } */}

      

    </Card>

  );
}

export default Expences;