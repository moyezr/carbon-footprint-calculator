"use client";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

import React from "react";
import { Card } from "@nextui-org/react";
import { useScoreContext } from "@/context/score";

const labels = [
  "FOOD",
  "MEMBERS",
  "PURCHASES",
  "RECYCLE",
  "SIZE",
  "TRANSPORTATION",
  "WASTE",
  "WATER",
];
const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Score Breakdown",
    },
  },
};

type Props = {};

const BarChart = (props: Props) => {
  const { score } = useScoreContext();

  const modifiedScore = {
    food: Number(score.food),
    members: Number(score.members),
    purchases: Number(score.purchases),
    recycle: Number(score.recycle),
    size: Number(score.size),
    transportation:
      Number(score.privateTransportation) + Number(score.publicTransportation),
    waste: Number(score.waste),
    water: Number(score.water),
  };

  console.log(modifiedScore);

  const data = {
    labels,
    datasets: [
      {
        label: "Score",
        data: Object.values(modifiedScore),
        backgroundColor: "#0070f0",
      },
    ],
  };

  return <Bar options={options} data={data} />;
};

export default BarChart;
