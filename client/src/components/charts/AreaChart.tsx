import { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";
import { AreaChartProps } from "@/types/charts.type";

const AreaChart = ({
  id = "chartId",
  series = [],
  xAxisData = [],
  chartHeight = 350,
}: AreaChartProps) => {
  const options: ApexOptions = {
    chart: {
      id,
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    xaxis: {
      type: "datetime",
      categories: xAxisData,
    },
  };

  return (
    <ReactApexChart
      type="area"
      series={series}
      options={options}
      height={chartHeight}
    />
  );
};

export default AreaChart;
