import "./components.scss";
import moment from "moment";
import AreaChartCard from "@/components/card/AreaCard";
import { useState } from "react";

const series = [
  {
    name: "STOCK ABC",
    data: [31, 40, 28, 51, 42, 109, 100],
  },
];

const xAxisData = [
  "2018-09-19",
  "2018-09-20",
  "2018-09-21",
  "2018-09-22",
  "2018-09-23",
  "2018-09-24",
  "2018-09-25",
];

type activeBtnType = "stock" | "expenses";

const Performance = () => {
  const [activePerformaceSection, setActivePerformaceSection] =
    useState<activeBtnType>("stock");

  /**
   * TSX
   */
  return (
    <div className="performance">
      <AreaChartCard
        id="perf-chart"
        strokeWidth={2}
        series={series}
        chartHeight={400}
        yAxisTitle="Rupees"
        title="Performance"
        xAxisData={xAxisData}
        additionalRightHeadComp={
          <HeadSection
            activeBtn={activePerformaceSection}
            setActiveBtn={setActivePerformaceSection}
          />
        }
        xAxisFormatter={(value) => moment(value).format("DD MMM YY")}
      />
    </div>
  );
};

interface HeadSectionProps {
  activeBtn: activeBtnType;
  setActiveBtn: (val: activeBtnType) => void;
}

function HeadSection({ activeBtn, setActiveBtn }: HeadSectionProps) {
  return (
    <div className="head-section">
      <button
        onClick={() => setActiveBtn("stock")}
        className={`left ${activeBtn === "stock" ? "active" : ""}`}
      >
        Stock
      </button>
      <button
        onClick={() => setActiveBtn("expenses")}
        className={`right ${activeBtn === "expenses" ? "active" : ""}`}
      >
        Expenses
      </button>
    </div>
  );
}

export default Performance;
