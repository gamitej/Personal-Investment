import { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";
import { AreaChartProps } from "@/types/charts.type";

const AreaChart = ({
  id = "chartId",
  xAxisFormatter,
  yAxisFormatter,
  series = [],
  xAxisData = [],
  chartHeight = 350,
  yAxisFontSize = "16px",
  enableDataLabels = false,
  yAxisTitle = "y-axis-title",
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
    dataLabels: {
      enabled: enableDataLabels,
    },
    xaxis: {
      type: "datetime",
      labels: {
        formatter: xAxisFormatter ? xAxisFormatter : (value) => value,
      },
      categories: xAxisData,
    },
    yaxis: {
      title: {
        text: yAxisTitle,
        style: {
          fontSize: yAxisFontSize,
        },
      },
      labels: {
        formatter: yAxisFormatter
          ? yAxisFormatter
          : (value) => value.toFixed(0),
      },
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
