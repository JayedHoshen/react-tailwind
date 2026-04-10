import React from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const resultData = [
  {
    id: 1,
    name: "Rahim Ahmed",
    math: 85,
    chemistry: 78,
    physics: 82,
  },
  {
    id: 2,
    name: "Karim Hasan",
    math: 92,
    chemistry: 88,
    physics: 90,
  },
  {
    id: 3,
    name: "Nusrat Jahan",
    math: 76,
    chemistry: 81,
    physics: 79,
  },
  {
    id: 4,
    name: "Tania Akter",
    math: 89,
    chemistry: 91,
    physics: 87,
  },
  {
    id: 5,
    name: "Sabbir Hossain",
    math: 68,
    chemistry: 74,
    physics: 70,
  },
  {
    id: 6,
    name: "Mim Islam",
    math: 95,
    chemistry: 93,
    physics: 96,
  },
  {
    id: 7,
    name: "Arif Chowdhury",
    math: 80,
    chemistry: 77,
    physics: 84,
  },
  {
    id: 8,
    name: "Jannat Sultana",
    math: 88,
    chemistry: 85,
    physics: 89,
  },
  {
    id: 9,
    name: "Fahim Rahman",
    math: 72,
    chemistry: 69,
    physics: 75,
  },
  {
    id: 10,
    name: "Sumaiya Khan",
    math: 90,
    chemistry: 86,
    physics: 91,
  },
];

const ResultsChart = () => {
  return (
    <div className="container mx-auto my-12">
      <h2 className="text-3xl text-center text-gray-400 uppercase underline mb-4">
        <a
          href="https://recharts.github.io/en-US/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Using Recharts
        </a>
      </h2>
      <LineChart style={{ width: "90%", height: "70vh" }} data={resultData}>
        <CartesianGrid strokeDasharray="1 4" />
        <XAxis dataKey={"name"}></XAxis>
        <YAxis></YAxis>
        <Tooltip content={resultData}></Tooltip>
        <Line dataKey={`math`}></Line>
        <Line dataKey={"chemistry"} stroke="purple" strokeWidth={"2px"}></Line>
      </LineChart>
    </div>
  );
};

export default ResultsChart;
