<template>
  <div class="chart-box">
    <canvas id="chart-express"></canvas>
  </div>
</template>
<script lang="ts">
import Chart from "chart.js/auto";
import { MONTHS, LastMonthDays, tooltipLine } from "./utils";

export default {
  data() {
    return {
      count: 0,
      data: [] as any,
      bgColors: [] as any,
    };
  },
  mounted() {
    this.data = Array.from({ length: LastMonthDays.length }, () =>
      Math.floor(Math.floor(Math.random() * (50 - 20 + 1) + 20))
    );

    for (let i = 0; i <= this.data.length; i++) {
      if (this.data[i] >= 40) {
        this.bgColors.push("#cddc39C4");
      }
      if (this.data[i] >= 30 && this.data[i] < 40) {
        this.bgColors.push("#d4e157C4");
      }
      if (this.data[i] >= 10 && this.data[i] < 30) {
        this.bgColors.push("#ffe082C4");
      }
      if (this.data[i] < 10) {
        this.bgColors.push("#ffecb3C4");
      }
    }

    const ctx = (
      document?.getElementById("chart-express") as HTMLCanvasElement
    ).getContext("2d");

    new Chart(ctx, {
      type: "line",
      plugins: [tooltipLine],
      data: {
        datasets: [
          {
            type: "bar",
            label: "Bar Dataset",
            data: this.data,
            borderColor: this.bgColors,
            backgroundColor: this.bgColors,
            order: 2,
            borderRadius: 2,
            pointRadius: 0,
          },
          {
            type: "line",
            options: {
              elements: {
                point: {
                  radius: 0,
                },
              },
            },
            label: "Line Dataset",
            data: this.data.map(
              (i: number) => i + Math.round(Math.random() * 10)
            ),
            order: 1,
            borderColor: "#cbcfd3",
            tension: 0.2,
            borderDash: [5, 5],
            borderWidth: 3,
            pointRadius: 0,
            pointHoverRadius: 0,
          },
        ],
        labels: LastMonthDays,
      },
      options: {
        plugins: {
          tooltip: {
            enabled: false,
          },
        },
        interaction: {
          intersect: false,
          mode: "index",
        },
        scales: {
          y: {
            beginAtZero: true,
            // grace: "40%",
          },
        },
      },
    });
  },
  methods: {
    countIncrease() {
      this.count++;
    },
  },
};
</script>
<style scoped lang="scss">
.chart-box {
  width: 900px;
}
</style>
