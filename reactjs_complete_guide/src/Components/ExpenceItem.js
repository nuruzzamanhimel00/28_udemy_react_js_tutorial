import './ExpenceItem.css'

function ExpenceItem(props){

    return (
            <div className='expence-item'>
                {/* <div className="expence-item__date">{props.date.toDateString()}</div> */}
                <div className="expence-item__date">
                    <div className='expence-item__date__item'>
                        <div>{props.date.toLocaleDateString('en-us',{ month: 'short'})}</div>
                        <div>{props.date.toLocaleDateString('en-us',{   year: 'numeric'})}</div>
                        <div>{props.date.toLocaleDateString('en-us',{   day: 'numeric'})}</div>
                    </div>
                   
                </div>
                <div className='expence-item__description'>
                    <h2>{props.title}</h2>
                    <div className='expence-item__price'>${props.amount}</div>
                </div>
            </div>
        );
}

export default ExpenceItem;
