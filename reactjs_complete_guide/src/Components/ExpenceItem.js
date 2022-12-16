import './ExpenceItem.css'
import ExpanceDate from './ExpenceDate.js'

function ExpenceItem(props){
 
    return (
            <div className='expence-item'>
                {/* <div className="expence-item__date">{props.date.toDateString()}</div> */}
                <div className="expence-item__date">
                    <ExpanceDate date={props.date} />
                   
                </div>
                <div className='expence-item__description'>
                    <h2>{props.title}</h2>
                    <div className='expence-item__price'>${props.amount}</div>
                </div>
            </div>
        );
}

export default ExpenceItem;
