export interface AreaChartProps {
  id: string;
  series: any[];
  yAxisTitle: string;
  xAxisData: string[];
  chartHeight?: number;
  yAxisFontSize?: string;
  enableDataLabels?: boolean;
  xAxisFormatter?: (value: string) => string;
  yAxisFormatter?: (value: string | number) => string;
}
