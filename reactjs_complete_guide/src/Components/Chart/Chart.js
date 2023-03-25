import React from 'react'

import './Chart.css'
import ChartBar from './ChartBar.js'

const Chart = (props) =>{

    const dataPointValue = props.dataPoints.map( dataPoint => dataPoint.value );
    const totalMaximum = Math.max(...dataPointValue);
    // console.log(dataPointValue, totalMaximum);
    return (
        <div className='chart'>
            {
                props.dataPoints.map( (dataPoint, index) => 
                
                <ChartBar
                    key={index}
                    value={dataPoint.value}
                    maxValue={totalMaximum}
                    label={dataPoint.label}
                 />)

            
               
            }
        </div>
    );
}

export default Chart;