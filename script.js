// 日本のGreenwich Mean Time(GMT)は+9
const months = [
  { x: Date.parse('2023-01-01  GMT+0900'), y: 4 },
  { x: Date.parse('2023-02-01 00:00:00 GMT+0900'), y: 3 },
  { x: Date.parse('2023-03-01 00:00:00 GMT+0900'), y: 3 },
  { x: Date.parse('2023-04-01 00:00:00 GMT+0900'), y: 3 },
  { x: Date.parse('2023-05-01 00:00:00 GMT+0900'), y: 4 },
  { x: Date.parse('2023-06-01 00:00:00 GMT+0900'), y: 7 },
  { x: Date.parse('2023-07-01 00:00:00 GMT+0900'), y: 9 },
  { x: Date.parse('2023-08-01 00:00:00 GMT+0900'), y: 13 },
  { x: Date.parse('2023-09-01 00:00:00 GMT+0900'), y: 15 },
  { x: Date.parse('2023-10-01 00:00:00 GMT+0900'), y: 16 },
  { x: Date.parse('2023-11-01 00:00:00 GMT+0900'), y: 9 },
  { x: Date.parse('2023-12-01 00:00:00 GMT+0900'), y: 8 },
];

// setup
const data = {
  labels: [],
  datasets: [
    {
      label: 'Leaves 🥬',
      data: months,
      backgroundColor: 'springGreen',
      borderColor: 'springGreen',
      borderWidth: 1,
      borderRadius: 15, // 棒グラフの先端に丸みをだす
    },
  ],
};

// config
const config = {
  type: 'bar',
  data: data,
  options: {
    scales: {
      x: {
        type: 'time',
        time: {
          unit: 'month',
          displayFormats: {
            month: 'MMM', // 月表記を指定('M'～'MMMMM'の4パターン)
          },
        },
        ticks: {
          font: {
            size: 9,
          },
        },
        grid: {
          display: false, // x軸のgrid線
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          font: {
            size: 10,
          },
        },
        grid: {
          display: true, // y軸のgrid線
        },
      },
    },
    plugins: {
      legend: {
        display: true, // グラフのタイトル
      },
    },
  },
};

// render init block
const myChart = new Chart(document.getElementById('myChart'), config);

// Instantly assign Chart.js version
const chartVersion = document.getElementById('chartVersion');
chartVersion.innerText = Chart.version;
