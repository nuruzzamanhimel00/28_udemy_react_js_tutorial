import React from 'react'

const ChartBar = (props) =>{

    let barFillheight = '0% !importent';

    if(props.maxValue > 0){
        barFillheight = Math.round( (props.value / props.maxValue ) *100 )+'% !importent';
    }

    return (
        <div className='chart-bar'>
            <div className='chart-bar__inner'>
                <div className='chart-bar__fill' style={ {height: barFillheight} } ></div>
            </div>
            <div className='chart-bar__label'>{props.label}</div>
        </div>
    );
    // return (
    //     <div className='chart-bar'>
    //         <div className='chart-bar__inner'>
    //             <div className='chart-bar__fill' ></div>
    //         </div>
    //         <div className='chart-bar__label'>Jan</div>
    //     </div>
    // );
}

export default ChartBar;