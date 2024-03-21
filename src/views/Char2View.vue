<template>
  <div class="chart2-container">
    <canvas ref="chartCanvas"></canvas>
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
        const response = await fetch('https://raw.githubusercontent.com/ergys25/simple-dashboard-api/main/chart2.json');
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
            labels: this.chartData.map(item => item.VNAME),
            datasets: [
              {
                label: 'General Avg Dead Time Per Berthing (hours)',
                data: this.chartData.map(item => item.GenAvgDeadTimePerBerthing),
                backgroundColor: 'rgba(54, 162, 235, 0.6)'
              }
            ]
          },
          options: {
            scales: {
              y: {
                ticks: {
                  callback: function(value) {
                    return value + 'h';
                  }
                }
              }
            },
            plugins: {
              legend: {
                display: false
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
.chart2-container {
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
