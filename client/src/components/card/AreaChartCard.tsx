import AreaChart from "@/components/charts/AreaChart";

const series = [
  {
    name: "STOCK ABC",
    data: [31, 40, 28, 51, 42, 109, 100],
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

const AreaChartCard = ({ chartHeight }) => {
  return (
    <div>
      <div></div>
      <div>
        <Chart chartHeight={chartHeight} />
      </div>
    </div>
  );
};

const Chart = ({ chartHeight }) => {
  return (
    <AreaChart
      series={series}
      xAxisData={xAxisData}
      chartHeight={chartHeight}
    />
  );
};

export default AreaChartCard;
