import React from "react";
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
  Tooltip
} from 'chart.js';

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
  Tooltip
)

  /*
   *
   * Still need to include DATE in the label
   * when a data point is HOVERED
   * 
   * by: Bins
   * 
   */

function LineGraph({ name, data, labels }) {
  const graphData = {
    labels: labels,
    datasets: [{
      data: data,
      backgroundColor: (context) => {
        const bgColor = [
          'rgba(255, 255, 255, 1)', // White
          'rgba(255, 255, 255, 0.9)',
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
      fill: true,
      pointHoverRadius: 4,
      pointHoverBorderWidth: 3,
      pointHoverBackgroundColor: '#431857',
    }]
  };

  const options = {
    plugins: {
      legend: false,
    },
    layout: {
      padding: {
        left: 12, 
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        grid: {
          display: false
        },

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

      },
    },
  };

  return (
    <div>
      <section className="mt-3">
        <div className="item-center">
        <p className="text-white flex text-2xl text-opacity-70 ml-36 indent-2 font-bold">{name}</p>
        </div>
        <div className="rounded-xl border border-white border-opacity-30 bg-[#4D4D4D] bg-opacity-10 flex pt-1 mt-3"
          style={{
            width: `${(1350 / window.innerHeight) * 100}vh`,
            height: `${(170 / window.innerHeight) * 100}vh`,
            marginLeft: '150px',
          }}>
            
          <Line data={graphData} options={options} 
          width={`${(1350 / window.innerHeight) * 100}vh`} 
          height={`${(170 / window.innerHeight) * 100}vh`}></Line>
        </div>
      </section>
    </div>
  );
}

export default LineGraph;