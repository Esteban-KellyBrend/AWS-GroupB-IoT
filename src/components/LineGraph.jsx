import React from "react";

import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
} from 'chart.js';

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
)

function LineGraph() {
  const data = {
    labels: ["May 1", "May 2", "May 3", "May 4", "May 5", "May 6"],
    datasets: [{
      data: [8, 9, 7, 12.5, 12, 13],
      backgroundColor: 'blue', //plot points color
      borderColor: 'red', // line color
      pointBorderColor: 'violet', //border ng plot points
      pointBorderWidth: 4,
      tension: 0.5 // nagpapaflow hahah
    }]
  };
  const options = {
    plugins: {
      legend: true // false
    },
    scales: {
      x: {
        grid: {
          display: true // false
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
    }
  };

  return (
    <div style={{ width: '500px', height: '500px', marginLeft: '20PX' }}>
      <Line data={data} options={options}></Line>
    </div>
  );

}

export default LineGraph;