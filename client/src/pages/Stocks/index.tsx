import "./Stocks.scss";
import BarChartCard from "@/components/card/BarCard";

const series = [
  {
    data: [21, 22, 10, 28, 16, 21, 13, 30],
  },
];

const categories = [
  "John",
  "Joe",
  "Jake",
  "Amber",
  "Peter",
  "Mary",
  "David",
  "Lily",
];

const Stocks = () => {
  return (
    <div className="stocks">
      <BarChartCard
        title="Company Stocks"
        id="bar-chart"
        series={series}
        chartHeight={350}
        yAxisTitle="Rupees"
        xAxisData={categories}
      />
    </div>
  );
};

export default Stocks;
