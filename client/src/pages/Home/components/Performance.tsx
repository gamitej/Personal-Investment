import "./components.scss";
import AreaChartCard from "@/components/card/AreaCard";

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

const Performance = () => {
  /**
   * TSX
   */
  return (
    <div className="performance">
      <AreaChartCard
        id="perf-chart"
        title="Performance"
        series={series}
        chartHeight={400}
        xAxisData={xAxisData}
      />
    </div>
  );
};

export default Performance;
