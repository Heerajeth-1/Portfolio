import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Chart = () => {
  const data = {
    labels: ["Easy", "Medium", "Hard"],
    datasets: [
      {
        label: "Problems Solved",
        data: [238, 41, 3], // Replace with your actual stats
        backgroundColor: ["#10B981", "#3B82F6", "#EF4444"],
        borderRadius: 8,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: {
        display: true,
        text: "LeetCode Progress",
        color: "#fff",
        font: { size: 20 },
      },
    },
    scales: {
      x: { ticks: { color: "#fff" } },
      y: { ticks: { color: "#fff" }, beginAtZero: true },
    },
  };

  return (
    <div className="w-full max-w-md mx-auto p-4 border border-red-800 rounded-xl shadow-md">
      <Bar data={data} options={options} />
    </div>
  );
};

export default Chart;
