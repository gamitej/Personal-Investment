import { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";

interface AreaChartProps {
  series: any[];
  xAxisData: string[];
}

const AreaChart = ({ series = [], xAxisData = [] }: AreaChartProps) => {
  const options: ApexOptions = {
    chart: {
      height: 350,
      type: "area",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      type: "datetime",
      categories: xAxisData,
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
  };

  return (
    <ReactApexChart
      type="area"
      height={300}
      series={series}
      options={options}
    />
  );
};

export default AreaChart;
