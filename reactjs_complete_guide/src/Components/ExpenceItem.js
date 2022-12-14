import './ExpenceItem.css'

function ExpenceItem(){

    const expenceDate = new Date(2018, 11, 24);
    const expenceTitle = "My car";
    const expencePrice = '$200';
    // console.log(expenceDate);
    return (
            <div className='expence-item'>
                <div className="expence-item__date">{expenceDate.toDateString()}</div>
                <div className='expence-item__description'>
                    <h2>{expenceTitle}</h2>
                    <div className='expence-item__price'>{expencePrice}</div>
                </div>
            </div>
        );
}

export default ExpenceItem;
