import OverviewCard from "@/components/card/OverviewCard";
import { FaChartLine } from "react-icons/fa6";
import { FaChartPie } from "react-icons/fa";
import { LuCandlestickChart } from "react-icons/lu";

const overviewCardData = [
  {
    logo: <LuCandlestickChart />,
    title: "Stocks",
    total: "Rs 10500",
    label: "total 5 stocks purchased",
  },
  {
    logo: <FaChartPie color="5d87ff" size={42} />,
    title: "Expenses",
    total: "Rs 10500",
    label: "total expense of march",
  },
  {
    logo: <FaChartLine color="5d87ff" size={42} />,
    title: "Savings",
    total: "Rs 10500",
    label: "total savings from Jan-24",
  },
];

const Overview = () => {
  /**
   * TSX
   */
  return (
    <div className="overview">
      <div className="overview-container">
        {overviewCardData.map((item, idx) => (
          <OverviewCard key={`overview-card-${idx}`} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Overview;
