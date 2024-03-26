<template>
  <!-- Chart container -->
  <div class="chart1">
    <!-- Canvas for the chart -->
    <canvas ref="chartCanvas" width="800" height="400"></canvas>
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
.chart1 {
  width: 100%;
  height: 100%;
  margin: 0 auto;
}
</style>
