import { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";

const DonutChart = ({
  series = [],
  chartBreakPoint = 480,
  legendPosition = "bottom",
}) => {
  const options: ApexOptions = {
    chart: {
      type: "donut",
    },
    responsive: [
      {
        breakpoint: chartBreakPoint,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: legendPosition,
          },
        },
      },
    ],
  };

  /**
   * TSX
   */
  return <ReactApexChart type="donut" series={series} options={options} />;
};

export default DonutChart;
