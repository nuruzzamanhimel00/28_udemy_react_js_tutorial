import './ExpencesList.css'
import ExpenceItem from './ExpenceItem.js'

const ExpencesList = (props) =>{
    let expenceContent = (<div className="card">
    <div className="card-body">
      <div className="no-data-found">
      <h1 >No Expences Found</h1>
      </div>
    
    </div>
  </div>);
    if(props.items.length > 0){
        expenceContent = props.items.map((expence) => 
        <ExpenceItem
        key={expence.id}
        title={expence.title}
        amount={expence.amount}
        date={expence.date}/>);
    }

    return (expenceContent);
}

export default ExpencesList;