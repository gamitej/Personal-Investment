import "./components.scss";
import moment from "moment";
import { useMemo, useState } from "react";
// components
import AreaChartCard from "@/components/card/AreaCard";
// data
import { seriesData } from "../data";
import Dropdown from "@/components/dropdown/Dropdown";

const options = [
  { label: "Stock", value: "stock" },
  { label: "Expenses", value: "expenses" },
];

const Performance = () => {
  const [activePerformaceSection, setActivePerformaceSection] =
    useState<string>("stock");

  const { series = [], xAxisData = [] } = useMemo(() => {
    if (activePerformaceSection in seriesData)
      return seriesData[activePerformaceSection];

    return { series: [], xAxisData: [] };
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
        chartHeight={350}
        yAxisTitle="Price"
        title="Performance"
        xAxisData={xAxisData}
        additionalRightHeadComp={
          <Dropdown
            options={options}
            selectedValue={activePerformaceSection}
            onChange={setActivePerformaceSection}
          />
          // <HeadSection
          //   activeBtn={activePerformaceSection}
          //   setActiveBtn={setActivePerformaceSection}
          // />
        }
        xAxisFormatter={(value) => moment(value).format("DD MMM YY")}
      />
    </div>
  );
};

export default Performance;
