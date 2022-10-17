import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import './index.css'


ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  
  datasets: [
    {
      label: '# of Votes',
      radius:"90%",
      data: [13, 13, 10, 10],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        
      ],
      borderColor: [
        'rgba(255, 99, 132, 0)',
        'rgba(54, 162, 235, 0)',
        'rgba(255, 206, 86, 0)',
        'rgba(75, 192, 192, 0)',
        
      ],
      borderWidth: 1,
      cutout:"60%"
    },
  ],
  labels: ['France 4260 Sales', 'Italy 3970 Sales', 'Japan 4260 Sales', 'Canada 3970 Sales'],
};

const options = {
  plugins: {
    legend: {
      display:true,
      position: 'bottom',
      
      
      labels: {
        usePointStyle: true,
        pointStyle: 'circle',
        padding: 20,
        ticks: {
          padding: 100
        }
        
      },
      
    },
    responsive: true,
    maintainAspectRatio: true,

  },
  
}



const plugins = [{
  beforeDraw: function(chart) {
   
      var height = chart.height,
       ctx = chart.ctx;
       ctx.restore();
       var fontSize = (height / 300).toFixed(2);
       ctx.font = fontSize + "em sans-serif";
       
       ctx.fillStyle = "#4D4F5C";
       ctx.textBaseline="bottom";
       ctx.fillText("230,900",120,115);
       ctx.textBaseline="top";
       ctx.fillText("Sales", 130, 120);
       
       ctx.save();
  } 
}]


export default function Statistics(props) {
  const {x} = props
  return (
    <div className={x?"shrink-demo":"demo"}>
    <p className="title">Sales Distribution</p>
   <div>
   <Doughnut data={data} options={options} plugins={plugins} className="c1"/>
   
   </div>
    
        
    </div>
  
  )
}
