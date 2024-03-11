import AreaChart from "@/components/charts/AreaChart";
import { AreaChartProps } from "@/types/charts.type";

interface AreaChartCardProps extends AreaChartProps {
  title: string;
}

const AreaChartCard = ({ title, ...rest }: AreaChartCardProps) => {
  return (
    <div>
      <div>{title}</div>
      <div>
        <Chart {...rest} />
      </div>
    </div>
  );
};

const Chart = (props: AreaChartProps) => {
  return <AreaChart {...props} />;
};

export default AreaChartCard;
