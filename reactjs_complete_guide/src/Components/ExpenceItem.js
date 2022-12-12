import './ExpenceItem.css'

function ExpenceItem(){
return (
        <div className='expence-item'>
            <div className="expence-item__date">March 25,2021</div>
            <div className='expence-item__description'>
                <h2>My car</h2>
                <div className='expence-item__price'>$200</div>
            </div>
        </div>
    );
}

export default ExpenceItem;
