import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import {
    Area,
    AreaChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Dashboard = () => {
  const [linChart, setLineChart] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setLineChart(data));
    console.log(data);
  }, []);
  return (
    <section className="flex justify-between mx-16">
      <article>
        <h1 className="text-center text-2xl font-semibold font-mono text-slate-500 my-10">
          Month wise Sell
        </h1>
        <LineChart width={600} height={400} data={linChart}>
          <Line type="monotone" dataKey={'sell'}></Line>
          <XAxis dataKey={"month"} stroke="#1ABC9C"></XAxis>
          <Tooltip></Tooltip>
          <YAxis stroke="#8884d8"></YAxis>
          <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
          <Legend></Legend>
        </LineChart>
      </article>
      
      <article>
        <h1 className="text-center text-2xl font-semibold font-mono text-slate-500 my-10">
          Investment vs Revenue
        </h1>
        <AreaChart width={600} height={400} data={linChart} margin={{
            top: 10,
            right: 5,
            left: 55,
            bottom: 10,
          }}>
            <CartesianGrid strokeDasharray="3 3" />
        <Area type="monotone" dataKey={'investment'} stroke="#8884d8" fill="#8884d8" />
        <Area type="monotone" dataKey={'revenue'} stroke="#8884d8" fill="#2980B9" />
        <XAxis dataKey={"month"} stroke="#1ABC9C"></XAxis>
          <Tooltip></Tooltip>
          <YAxis stroke="#8884d8"></YAxis>
          <Legend></Legend>
        </AreaChart>
      </article>
    </section>
  );
};

export default Dashboard;
