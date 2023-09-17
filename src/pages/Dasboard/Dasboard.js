import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Chart } from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';
import { AuthContext } from '../../context/AuthContext';

const DashboardChart = ({ data, chartOptions }) => {
  return (
    <div className="dashboard-chart">
      <Bar data={data} options={chartOptions} />
    </div>
  );
};

const DashboardNumberBox = ({ title, value }) => {
  return (
    <div className="dashboard-number-box">
      <h3>{title}</h3>
      <p>{value}</p>
    </div>
  );
};

export default function Dasboard() {
  const { userInfo, isUserLoggedin , userId } = useContext(AuthContext);
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Monthly Revenue',
        data: [],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  });

  useEffect(() => {
    if (isUserLoggedin) {
  
      fetch(`http://localhost:3500/OrdersArray?userId=${userId}`)
        .then((response) => response.json())
        .then((fetchedData) => {
          const prices = [];

          fetchedData.forEach((item) => {
            item.state.cartitems.forEach((cartItem) => {
              prices.push(cartItem.price);
            });
          });
      
           console.log(prices)
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }
  }, [isUserLoggedin, userId]);

  const dashboardData = [
    { title: 'Total Orders', value: 150 },
    { title: 'Revenue', value: '$25,000' },
  ];

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <>
      
      <div className="dashboard-content">
        <div className="dashboard-number-boxes">
          {dashboardData.map((item, index) => (
            <DashboardNumberBox key={index} title={item.title} value={item.value} />
          ))}
        </div>
        <div className="dashboard-chart-container">
          <DashboardChart data={chartData} chartOptions={chartOptions} />
        </div>
      </div>
    </>
  );
}
