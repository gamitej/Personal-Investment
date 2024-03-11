import AreaChart from "@/components/charts/AreaChart";

const series = [
  {
    name: "series1",
    data: [31, 40, 28, 51, 42, 109, 100],
  },
  {
    name: "series2",
    data: [11, 32, 45, 32, 34, 52, 41],
  },
];

const xAxisData = [
  "2018-09-19T00:00:00.000Z",
  "2018-09-19T01:30:00.000Z",
  "2018-09-19T02:30:00.000Z",
  "2018-09-19T03:30:00.000Z",
  "2018-09-19T04:30:00.000Z",
  "2018-09-19T05:30:00.000Z",
  "2018-09-19T06:30:00.000Z",
];

const AreaChartCard = () => {
  return (
    <div>
      <div></div>
      <div>
        <Chart />
      </div>
    </div>
  );
};

const Chart = () => {
  return <AreaChart series={series} xAxisData={xAxisData} />;
};

export default AreaChartCard;
