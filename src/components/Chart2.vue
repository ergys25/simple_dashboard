<template>
  <div class="chart-container">
    <canvas ref="chartCanvas" width="800" height="400"></canvas>
  </div>
</template>

<script>
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
        // Make API call to fetch data
        const response = await fetch('http://178.18.253.143:8080/sp-api/spr_TopXVesselsDeadTime/15');
        const data = await response.json();

        // Extracting data from the response
        this.chartData = data.recordsets[0];

        // Create chart once data is fetched
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
            labels: this.chartData.map(item => item.VNAME),
            datasets: [
              {
                label: 'General Avg Dead Time Per Berthing (hours)',
                data: this.chartData.map(item => item.GenAvgDeadTimePerBerthing),
                backgroundColor: 'rgba(54, 162, 235, 0.6)' // Blue color for bars
              }
            ]
          },
          options: {
            scales: {
              y: {
                ticks: {
                  callback: function(value) {
                    return value + 'h'; // Add 'h' to the tick value to denote hours
                  }
                }
              }
            },
            plugins: {
              legend: {
                display: false // Hide legend for this chart
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
.chart-container {
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width : 60%;

}
</style>
