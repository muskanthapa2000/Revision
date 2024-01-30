import React, { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { useDispatch, useSelector } from 'react-redux';
import { gettingDataSuccess } from '../redux/actions';

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
      text: 'Chart.js Doughnut Chart - 2023 Emissions',
    },
  },
};

export const DoughnutChart = () => {
  const allData = useSelector((store) => store.data);
  const dispatch = useDispatch();
  console.log(allData);

  const [uniqueSuppliers, setUniqueSuppliers] = useState([]);

  useEffect(() => {
    dispatch(gettingDataSuccess());
  }, [dispatch]);

  useEffect(() => {
    const uniqueSuppliersList = Array.from(new Set(allData.map((data) => data.supplier)));
    setUniqueSuppliers(uniqueSuppliersList);
  }, [allData]);

  const getTotalEmissionsBySupplier = (supplier) => {
    return allData
      .filter((data) => data.supplier === supplier)
      .reduce((totalEmissions, data) => totalEmissions + data.emissions, 0);
  };

  const chartData = {
    labels: uniqueSuppliers,
    datasets: [{
      type: 'doughnut',
      label: "Total Emissions - 2023",
      backgroundColor: ["#544B8D", "#FF5733", "#5CAB7D", "#FFC300", '#FFC400',
      '#3BB85E',
      '#B54F69',
      '#E994B1',
      '#7C95EA',
      '#544B8D',], // You can add more colors as needed
      borderWidth: 1,
      data: uniqueSuppliers.map((supplier) => getTotalEmissionsBySupplier(supplier)),
    }],
  };

  return (
    <div style={{width : '40%'}}>
      <Doughnut data={chartData} options={options} />
    </div>
  );
};