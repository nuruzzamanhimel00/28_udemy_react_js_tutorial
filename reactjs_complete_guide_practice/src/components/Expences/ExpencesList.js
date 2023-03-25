import React from 'react';
import ExpenceItem from './ExpenceItem.js'

const ExpencesList = (props) =>{

    let expenceItems = (<div className="card m-1 text-center">
    <div className="card-body">
      <div className="no-data-found">
      <h1 >No Expences Found</h1>
      </div>
    
    </div>
  </div>);

    if(props.items.length > 0){
        expenceItems = props.items.map( (expences) =>
        <ExpenceItem
            key={expences.id}
            title={expences.title}
            amount={expences.amount}
            date={expences.date}
        />
        ); 
    }

   return (
        expenceItems
   );
}

export default ExpencesList;