import React from 'react';
 import Chart from '../Chart/Chart';

 function ExpensesChart(props){
    const chartdatapoints=[
        {label:'jan',value:'0'},
        {label:'feb',value:'0'},
        {label:'mar',value:'0'},
        {label:'apr',value:'0'},
        {label:'may',value:'0'},
        {label:'jun',value:'0'},
        {label:'jul',value:'0'},
        {label:'aug',value:'0'},
        {label:'sep',value:'0'},
        {label:'oct',value:'0'},
        {label:'nov',value:'0'},
        {label:'dec',value:'0'},
 ];
 for(const expenses of props.expenses){
    const expenseMonth = expenses.date.getMonth();
  chartdatapoints[expenseMonth].value += expenses.amount;
}
 return <Chart datapoints={chartdatapoints}/>;
}
 export default ExpensesChart;