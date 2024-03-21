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
      chart: null, // Will hold the chart instance
      chartData: null // Will hold the fetched data
    };
  },
  mounted() {
    // Fetch chart data when component is mounted
    this.fetchChartData();
  },
  methods: {
    async fetchChartData() {
      try {
        // Fetch data from the API
        const response = await fetch('http://178.18.253.143:8080/sp-api/spr_topXLaytime/2024-02-01%2000:00:00&2024-02-29%2000:00:00&15');
        const data = await response.json();

        // Store the fetched data
        this.chartData = data.recordsets[0];

        // Create the chart
        this.createChart();
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
    createChart() {
      if (this.chartData) {
        // Get the context of the canvas
        const ctx = this.$refs.chartCanvas.getContext('2d');

        // Create a new chart
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
                    return value + 'h'; // Add 'h' to the tick value to denote hours
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
/* Styles for the chart container */
.chart1 {
  width: 100%;
  height: 100%;
  margin: 0 auto;
}
</style>