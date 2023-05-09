import React from 'react'
import "./linechart.css"
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Line } from 'react-chartjs-2'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

const LineChart = ({coinHistory, currentPrice, coinName, timePeriod}) => {
    const coinPrice = [];
    const coinTimestamp = [];

    for(let i = 0; i < coinHistory?.data?.history?.length; i++){
        coinPrice.push(coinHistory?.data?.history[i]?.price);
    }

    for(let i = 0; i < coinHistory?.data?.history?.length; i++){
        timePeriod === "3h" || timePeriod === "24h" ? (
           coinTimestamp.push(new Date(coinHistory?.data?.history[i]?.timestamp*1000).toLocaleString()) 
        ) : (
            coinTimestamp.push(new Date(coinHistory?.data?.history[i]?.timestamp*1000).toLocaleDateString()) 
        )
        
    }

    coinPrice.reverse()
    coinTimestamp.reverse()

    const data = {
        labels: coinTimestamp,
        datasets: [
          {
            label: 'Price In USD',
            data: coinPrice,
            fill: false,
            backgroundColor: '#0071bd',
            borderColor: '#0071bd',
          },
        ],
      };

      const options = {
        responsive : true,
        plugins : {
            legend : {
                position : "top"
            } 
        }
      };


  return (
    <section className='chart-sectoin'>
        <div className='chart-heading-container'>
            <h2 className='headtxt' >{coinName} Price Chart</h2>
            <span>Change:  <strong>{coinHistory?.data?.change} %</strong></span>
            <span>Price: $  <strong>{currentPrice}</strong></span>
        </div>
        <div className='chart'>
            <Line data={data} options={options} />
        </div>
    </section>
  )
}

export default LineChart