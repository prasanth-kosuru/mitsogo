import React from "react";
import './index.css'

import { Line } from "react-chartjs-2";
import Chart from 'chart.js/auto';

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Products Sold",
      data: [3,2,2,1,8,2],
      fill:true,
      backgroundColor: ["rgba(255,206,86,0.2)"],
      borderColor: ['rgba(255,206,86,0.2)'],
      pointBackgroundColor:'rgba(255,206,86,0.2)',
      pointBorderColor:'rgba(255,206,86,0.2)',
      borderWidth:2,
      
    },
    {
      label: "Total Views",
      data: [1,3,2,2,3,8],
      fill:true,
      backgroundColor: ["rgba(54,162,235,0.2)"],
      borderColor: ['rgba(54,162,235,0.2)'],
      pointBackgroundColor:'rgba(54,162,235,0.2)',
      pointBorderColor:'rgba(54,162,235,0.2)',
      borderWidth:2,
    },
    
  ]
};
const options = {
    locale:'en-US',
    tension:0.4,
    scales:{
        x:{
            grid:{
                display:true
            }
        },
        y:{
            grid:{
                display:true
            },
            ticks:{
                maxTicksLimit:5,
                callback:((context,index) => {
                    return context
                })
            }
        }
    },
    plugins:{
        legend:{
            position:'bottom',
           labels:{
            usePointStyle:true,
            pointStyle:'circle'
           }
        },
        
    }
}
export default function LineChart(props) {
  const {x} = props
  return (
    <div className={x?"shrink-linechart-style":"linechart-style"}>
        <div className="linechart-header">
            <p className="stats">Statistics</p>
            <p className="stats">Last 6 months</p>
        </div>
      <Line data={data} options={options} className="mainlinechart-style"/>
    </div>
  );
}
