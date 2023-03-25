import React from "react";
import './ExpenceChart.css'
import Chart from './Chart.js'

const ExpenceChart = (props) => {

    let chartDataPoint = [
        {label:'Jan', value:0},
        {label:'Fab', value:0},
        {label:'Mar', value:0},
        {label:'Apr', value:0},
        {label:'May', value:0},
        {label:'Jun', value:0},
        {label:'Jul', value:0},
        {label:'Aug', value:0},
        {label:'Sep', value:0},
        {label:'Oct', value:0},
        {label:'Nov', value:0},
        {label:'Dec', value:0},
    ];

    for ( let expence of props.expences) {
        let expenceMonth = expence.date.getMonth();
        chartDataPoint[expenceMonth].value +=  parseInt(expence.amount);
        // console.log(expenceMonth);
      }
    
    //   console.log(chartDataPoint);

    return (
        <div>
            <Chart dataPoints={chartDataPoint} />
        </div>
    );
}

export default ExpenceChart;