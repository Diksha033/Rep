
import React from 'react';
import './Chart.css';
import ChartBar from './ChartBar';

const Chart= (props) =>{ 
  const datapointvalue = props.datapoints.map(datapoint=> datapoint.value);
  const totalmax= Math.max(...datapointvalue);
return(
    <div class='Chart'>
        {props.datapoints.map((datapoint) => (
      <ChartBar 
      key={datapoint.label}
      value={datapoint.value}
      label={datapoint.label}
      maxvalue={totalmax}
        />))}
</div>
);
  };
        
export default Chart;
