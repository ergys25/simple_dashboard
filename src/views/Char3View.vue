<template>
  <!-- Chart container -->
  <div class="chart3-container">
    <canvas ref="chartCanvas"></canvas>
  </div>
</template>

<script>
// Importing Chart.js library
import Chart from 'chart.js/auto';

export default {
  data() {
    return {
      chart: null,
      chartData: null
    };
  },
  mounted() {
    this.fetchChartData();
  },
  methods: {
    async fetchChartData() {
      try {
        // Fetch data from the provided URL
        const response = await fetch('https://raw.githubusercontent.com/ergys25/simple-dashboard-api/main/chart3.json');
        const data = await response.json();
        this.chartData = data.recordsets[0];
        this.createChart();
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
    createChart() {
      if (this.chartData) {
        const ctx = this.$refs.chartCanvas.getContext('2d');

        // Create a line chart using Chart.js
        this.chart = new Chart(ctx, {
          type: 'line',
          data: {
            labels: this.chartData.map(item => item.DT),
            datasets: [
              {
                label: 'Daily Berth Occupancy',
                data: this.chartData.map(item => item.AllBerths),
                fill: false,
                borderColor: 'rgba(255, 99, 132, 0.6)',
                tension: 0.1
              }
            ]
          },
          options: {
            scales: {
              x: {
                type: 'time',
                time: {
                  unit: 'day'
                }
              },
              y: {
                ticks: {
                  callback: function (value) {
                    return (value * 100).toFixed(2) + '%'; // Display values as percentages
                  }
                }
              }
            },
            plugins: {
              legend: {
                display: true,
                position: 'bottom'
              }
            }
          }
        });
      }
    }
  }
};
</script>

<style scoped>
/* Style for the chart container */
.chart3-container {
  width: 90%;
  height: 90%;
  max-width: 800px;
  max-height: 600px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
