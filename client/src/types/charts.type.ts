export interface AreaChartProps {
  id: string;
  series: any[];
  yAxisTitle: string;
  xAxisData: string[];
  strokeWidth?: number;
  markersSize?: number;
  chartHeight?: number;
  enableGrid?: boolean;
  yAxisFontSize?: string;
  enableDataLabels?: boolean;
  xAxisFormatter?: (value: string) => string;
  yAxisFormatter?: (value: string | number) => string;
}

export interface BarChartProps {
  id: string;
  series: any[];
  yAxisTitle: string;
  xAxisData: string[];
  chartHeight?: number;
  xAxisFontSize?: string;
  yAxisFontSize?: string;
  enableDataLabels?: boolean;
  xAxisFormatter?: (value: string) => string;
  yAxisFormatter?: (value: string | number) => string;
}
