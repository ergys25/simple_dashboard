<template>
  <!-- Chart container -->
  <div class="chart-container">
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
        const response = await fetch('https://raw.githubusercontent.com/ergys25/simple-dashboard-api/main/chart1.json');
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

        // Create a bar chart using Chart.js
        this.chart = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: this.chartData.map(item => item.Vessel),
            datasets: [
              {
                label: 'Total Laytime',
                data: this.chartData.map(item => item.TotalLaytime),
                backgroundColor: 'rgba(75, 192, 192, 0.6)'
              },
              {
                label: 'Average Laytime',
                data: this.chartData.map(item => item.AvgLaytime),
                backgroundColor: 'rgba(255, 99, 132, 0.6)'
              }
            ]
          },
          options: {
            scales: {
              x: {
                stacked: true,
                grid: {
                  display: false
                }
              },
              y: {
                stacked: true,
                grid: {
                  color: 'rgba(0, 0, 0, 0.1)'
                },
                ticks: {
                  callback: function (value) {
                    return value + 'h'; // Display hours next to y-axis values
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
.chart-container {
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
