import React, { use } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const MarksChart = ({ marksPromise }) => {
  const marksDataRes = use(marksPromise);
  const marksData = marksDataRes.data;

  // data processing for the chart
  const marksChartData = marksData.map((studentData) => {
    const student = {
      id: studentData.id,
      name: studentData.name,
      physics: studentData.marks.physics,
      chemistry: studentData.marks.chemistry,
      math: studentData.marks.math,
    };
    const avg = (student.physics + student.math + student.chemistry) / 3;
    student.avg = avg;

    return student;
  });

  console.log(marksChartData);

  return (
    <div className="container mx-auto my-12">
      <h2 className="text-3xl text-center text-gray-400 uppercase underline mb-4">
        <a
          href="https://recharts.github.io/en-US/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Using Recharts & load data from
        </a>
        <span> </span>
        <a
          href="https://axios-http.com/docs/intro"
          target="_blank"
          rel="noopener noreferrer"
        >
          axios
        </a>
      </h2>
      <BarChart
        style={{ width: "90%", height: "70vh" }}
        data={marksChartData}
        responsive
      >
        <CartesianGrid strokeDasharray="1 4" />
        <XAxis dataKey={"name"}></XAxis>
        <YAxis></YAxis>
        <Tooltip></Tooltip>
        <Bar
          dataKey={"math"}
          fill="blue"
          activeBar={{ fill: "pink", stroke: "blue" }}
        ></Bar>
        <Bar
          dataKey={"avg"}
          fill="orange"
          activeBar={{ fill: "lightgray", stroke: "orange" }}
        ></Bar>
        <Bar
          dataKey={"chemistry"}
          fill="purple"
          activeBar={{ fill: "gray", stroke: "purple" }}
        ></Bar>
        <Line
          dataKey={"avg"}
          fill="orange"
          stroke="orange"
          strokeWidth={"3px"}
        ></Line>
      </BarChart>
    </div>
  );
};

export default MarksChart;
