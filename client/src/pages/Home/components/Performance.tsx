import "./components.scss";
import moment from "moment";
import { useMemo, useState } from "react";
// components
import AreaChartCard from "@/components/card/AreaCard";
// data
import { seriesData } from "../data";

type activeBtnType = "stock" | "expenses";

const Performance = () => {
  const [activePerformaceSection, setActivePerformaceSection] =
    useState<activeBtnType>("stock");

  const { series = [], xAxisData = [] } = useMemo(() => {
    return seriesData[activePerformaceSection];
  }, [activePerformaceSection]);

  /**
   * TSX
   */
  return (
    <div className="performance">
      <AreaChartCard
        id="perf-chart"
        strokeWidth={2}
        series={series}
        // markersSize={5}
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
