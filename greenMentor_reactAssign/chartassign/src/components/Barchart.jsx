import React, { useEffect, useState } from 'react'
import { Bar,Line } from 'react-chartjs-2';
import {Chart as chartjs} from 'chart.js/auto'
import { useDispatch, useSelector } from 'react-redux';
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';
import { gettingDataSuccess } from '../redux/actions';

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController
);

export const options = {
  responsive: true,
  interaction: {
    mode: 'index',
    intersect: false,
  },
  stacked: false,
  plugins: {
    title: {
      display: true,
      text: 'Chart.js Line Chart - Multi Axis',
    },
  },
  scales: {
    y: {
      type: 'linear' ,
      display: true,
      position: 'left' ,
    },
    y1: {
      type: 'linear',
      display: true,
      position: 'right',
      grid: {
        drawOnChartArea: false,
      },
    },
  },
};

export const Barchart = () => {
    const data =    useSelector((store)=>store.data)
    const dispatch = useDispatch();

    useEffect(()=>{
  dispatch(gettingDataSuccess())
    },[dispatch])
    console.log(data);
    const [useData, setuseData] = useState({
      labels : data.filter((data)=>  data.year == "2023").map((data)=>data.month),

      datasets:[{
        type:'bar',
        label: "Emissions -2023",
        backgroundColor:"#544B8D",
        borderWidth:1,
        data: data.filter((data)=> data.year =="2023").map((data)=>data.emissions)
    
    },
      {
        type:'bar',
        label: "Emissions -2022",
        backgroundColor:"#3BB85E",
        borderWidth:1,
        data: data.filter((data)=> data.year =="2022").map((data)=>data.emissions)
       
    }, {
      type: 'line',
      label: 'E/R - 2023',
      borderColor: 'rgb(255, 99, 132)',
      borderWidth: 2,
      fill: false,
      data: data.filter((data)=> data.year == '2023').map((data)=>data.r_e)
      ,yAxisID: 'y1'
    }, {
      type: 'line',
      label: 'E/R - 2022',
      borderColor: 'rgb(255, 99, 132)',
      borderWidth: 2,
      fill: false,
      data: data.filter((data)=> data.year == '2022').map((data)=>data.r_e)
      ,yAxisID: 'y1'
    }
    ]
    })

    
  return <Bar data={useData} options={options} />

  
}