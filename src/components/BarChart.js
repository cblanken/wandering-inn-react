import React from 'react'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const labels = ['Volume 1', 'Volume 2', 'Volume 3', 'Volume 4', 'Volume 5', 'Volume 6', 'Volume 7', 'Volume 8', 'Volume 9']

const data = {
  labels,
  datasets: [
    {
      label: 'Word Count',
      data: labels.map((arr, i) => i + 1),
      backgroundColor: 'rgb(255, 99, 132)',
    },
  ],
};

function BarChart() {
  return (
    <Bar data={data} />
  )
}

export default BarChart