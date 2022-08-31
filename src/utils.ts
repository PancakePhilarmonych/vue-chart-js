import type { Chart } from "chart.js";

export const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const tooltipLine = {
  id: "tooltipLine",
  beforeDraw: (chart: Chart) => {
    if (chart?.tooltip?._active && chart.tooltip?._active.length) {
      const ctx = chart.ctx;
      const activePoint = chart.tooltip._active[0];
      const barWidth = chart.getDatasetMeta(0).data[0].width;

      ctx.beginPath();
      ctx.moveTo(activePoint.element.x, chart.chartArea.top);
      ctx.lineTo(activePoint.element.x, chart.chartArea.bottom);
      ctx.lineWidth = barWidth;
      ctx.strokeStyle = "#f5f6fa";
      ctx.stroke();
      ctx.restore();
    }
  },
};

export const LastMonthDays = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29,
];
