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

function LineGraph({ data, labels }) {
  const graphData = {
    labels: labels,
    datasets: [{
      data: data,
      backgroundColor: (context) => {
        const bgColor = [
          'rgba(255, 255, 255, 1)', // White
          'rgba(255, 255, 255, 0.9)', // Light gray with some transparency
          'rgba(255, 255, 255, 0.8)',
          'rgba(192, 192, 192, 0.6)',
          'rgba(192, 192, 192, 0.3)',
          'rgba(192, 192, 192, 0)' // Fully transparent gray
        ];

        if (!context.chart.chartArea) {
          return;
        }

        const { ctx, chartArea: { top, bottom } } = context.chart;
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
      legend: false
    },
    scales: {
      x: {
        grid: {
          display: false
        }
      },
      y: {
        min: Math.min(...data) - 1,
        max: Math.max(...data) + 1,
        ticks: {
          stepSize: 1,
          callback: (value) => value + ' kph'
        },
        grid: {
          borderDash: [20]
        }
      }
    },
  };

  return (
    <div className="rounded-xl border border-white border-opacity-30 bg-[#4D4D4D] bg-opacity-10 flex pt-1" style={{ width: '1350px', height: '200px', marginLeft: '150px', marginTop: '40px' }}>
      <Line data={graphData} options={options}></Line>
    </div>
  );
}

export default LineGraph;