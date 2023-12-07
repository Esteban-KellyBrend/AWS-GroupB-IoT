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

function LineGraph({ name, data, labels, unit = '', dataLimit }) {
  const limitedLabels = labels.slice(0, dataLimit).reverse();
  const graphData = {
    labels: limitedLabels,
    datasets: [{
      data: data,
      backgroundColor: (context) => {
        const bgColor = [
          'rgba(255, 255, 255, 0.6)', // White
          'rgba(255, 255, 255, 0.5)',
          'rgba(255, 255, 255, 0.4)',
          'rgba(192, 192, 192, 0.3)',
          'rgba(192, 192, 192, 0.2)',
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
      pointBorderWidth: 4,
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
        top: 20,
        bottom: 10,
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
        min: Math.floor(Math.min(...data)) - 1,
        max: Math.ceil(Math.max(...data)) + 1,
        ticks: {
          stepSize: 1,
          callback: (value) => Math.round(value) + " " + unit, 
          precision: 2,
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
            width: `${(1250 / window.innerHeight) * 100}vh`,
            height: `${(170 / window.innerHeight) * 100}vh`,
            marginLeft: '150px',
          }}>
          {data.length > 0 && ( // Ensures that the data must loaded first before loading the graph for the transition effect
          <Line data={graphData} options={options}
            width={`${(1250 / window.innerHeight) * 100}vh`}
            height={`${(170 / window.innerHeight) * 100}vh`}></Line>
        )}
        </div>
      </section>
    </div>
  );
}

export default LineGraph;