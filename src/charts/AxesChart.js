import React from "react";
import { Axes } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function AxesChart({ chartData }) {
  return <Axes data={chartData} />;
}

export default AxesChart;