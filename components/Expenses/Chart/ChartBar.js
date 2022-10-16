import React from 'react';
import './ChartBar.css';

const ChartBar = (props) => {
 let barfillHeight= '0%';

    if(props.maxvalue > 0){
        barfillHeight= Math.round((props.value /props.maxvalue) * 100) + '%';
    }
 return(
    <div class='chart-bar'>
 <div class='chart-bar__inner'>
<div class='chart-bar__fill'  style={{ height:barfillHeight}}></div>
  </div>
        <div class='chart-bar__label'>{props.label} </div>
    </div>
    );
};
export default ChartBar;
