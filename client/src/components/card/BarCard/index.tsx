import "./BarChartCard.scss";
import BarChart from "@/components/charts/BarChart";
import { BarChartProps } from "@/types/charts.type";

interface BarChartCardProps extends BarChartProps {}

const BarChartCard = ({ ...rest }: BarChartCardProps) => {
  return (
    <div>
      <div></div>
      <div>
        <Chart {...rest} />
      </div>
    </div>
  );
};

function Chart(props: BarChartProps) {
  return <BarChart {...props} />;
}

export default BarChartCard;
