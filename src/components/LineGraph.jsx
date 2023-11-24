import React from "react";

import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler
} from 'chart.js';

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler
)

function LineGraph() {
  const data = {
    labels: ["May 1", "May 2", "May 3", "May 4", "May 5", "May 6"],
    datasets: [{
      data: [8, 9, 7, 12.5, 12, 13],
      backgroundColor: (context) => {
        const bgColor = [
          'rgba(255, 255, 255, 1)', // White
          'rgba(255, 255, 255, 0.9)', // Light gray with some transparency
          'rgba(255, 255, 255, 0.8)',
          'rgba(192, 192, 192, 0.6)',
          'rgba(192, 192, 192, 0.3)',
          'rgba(192, 192, 192, 0)' // Fully transparent gray
        ]; // Plot points color

        if (!context.chart.chartArea) {
          return;
        }

        const { ctx, chartArea: {top, bottom} } = context.chart;
        const gradientBg = ctx.createLinearGradient(0, top, 0, bottom);
        const colorTranches = 1 / (bgColor.length - 1);

        bgColor.forEach((color, index) => {
          gradientBg.addColorStop(index * colorTranches, color);
        });

        return gradientBg;
      },
      borderColor: 'white',
      borderWidth: 3,
      pointBorderColor: 'white',
      pointBorderWidth: 1,
      tension: 0.5,
      fill: true
      
    }]
  };

  const options = {
    plugins: {
      legend: false // false
    },
    scales: {
      x: {
        grid: {
          display: false 
        }
      },
      y: {
        min: 2,
        max: 15,
        ticks: {
          stepSize: 1, //interval sa y axis
          callback: (value) => value + 'hehe'
        },
        grid: {
          borderDash: [10]
        }
      }
    },
    
  };

  return (
    <div style={{ width: '1098px', height: '500px', marginLeft: '20PX' }}>
      <Line data={data} options={options}></Line>
    </div>
  );

}

export default LineGraph;