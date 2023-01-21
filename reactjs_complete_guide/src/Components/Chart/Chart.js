import React from 'react'

import './Chart.css'
import ChartBar from './ChartBar.js'

const Chart = (props) =>{

    
    return (
        <div className='chart'>
            {
                props.dataPoints.map( (dataPoint, index) => 
                
                <ChartBar
                    key={index}
                    value={dataPoint.value}
                    maxValue={null}
                    label={dataPoint.label}
                 />)

            
               
            }
              {/* <ChartBar > </ChartBar>
              <ChartBar > </ChartBar>
              <ChartBar > </ChartBar>
              <ChartBar > </ChartBar>
              <ChartBar > </ChartBar>
              <ChartBar > </ChartBar>
              <ChartBar > </ChartBar>
              <ChartBar > </ChartBar>
              <ChartBar > </ChartBar>
              <ChartBar > </ChartBar>
              <ChartBar > </ChartBar>
              <ChartBar > </ChartBar> */}
        </div>
    );
}

export default Chart;