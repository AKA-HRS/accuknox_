import React from "react";
import { Doughnut } from "react-chartjs-2";
import cross from "../../assets/cross.svg";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);

export function PieCard({ values, color, title, labels, onRemove }) {
  const data = {
    labels: labels,
    datasets: [
      {
        data: values,
        backgroundColor: color,
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "right",
        labels: {
          boxWidth: 11,
          align: "left",
          generateLabels: (chart) => {
            const { data } = chart;
            if (!data.datasets.length) return [];
            return data.labels.map((label, i) => ({
              text: `${label} (${data.datasets[0].data[i]})`,
              fillStyle: data.datasets[0].backgroundColor[i],
              strokeStyle: data.datasets[0].borderColor
                ? data.datasets[0].borderColor[i]
                : undefined,
              lineWidth: data.datasets[0].borderWidth
                ? data.datasets[0].borderWidth[i]
                : undefined,
              hidden: chart.getDatasetMeta(0).data[i].hidden,
            }));
          },
        },
      },
    },
    layout: {
      padding: {
        right: 120,
      },
    },
  };

  const total = values.reduce((acc, value) => acc + value, 0);

  return (
    <div className="relative bg-white min-w-[450px] overflow-hidden h-60 p-2 m-3 rounded-lg">
      <div className="w-full flex justify-between items-center px-2">
        <p className="font-bold">{title}</p>
        <button onClick={onRemove}>
          <img src={cross} alt="" className="w-6" />
        </button>
      </div>
      <div className="absolute flex justify-center h-full items-center flex-col left-[80px]">
        <p className="font-bold">{total}</p>
        <p>Total</p>
      </div>
      <Doughnut data={data} options={options} />
    </div>
  );
}
