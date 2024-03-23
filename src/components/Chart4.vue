<template>
  <div class="chart4">
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
        const response = await fetch('https://raw.githubusercontent.com/ergys25/simple-dashboard-api/main/chart4.json');
        const data = await response.json();
        this.chartData = data.recordsets[0][0];
        this.createChart();
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
    createChart() {
      if (this.chartData) {
        const ctx = this.$refs.chartCanvas.getContext('2d');
        this.chart = new Chart(ctx, {
          type: 'pie',
          data: {
            labels: ['Session Time', 'Laytime', 'Connection Time', 'Transfer Time', 'Dead Time', 'Mooring Time', 'Unmooring Time'],
            datasets: [{
              data: [
                this.chartData.SessionTime,
                this.chartData.Laytime,
                this.chartData.ConnectionTime,
                this.chartData.TransferTime,
                this.chartData.DeadTime,
                this.chartData.MooringTime,
                this.chartData.UnmooringTime
              ],
              backgroundColor: [
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)',
                'rgba(255, 159, 64, 0.6)',
                'rgba(23, 45, 123, 0.6)'
              ]
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
              legend: {
                position: 'top',
                align: 'start', // Change this to 'center' or 'end' as needed
                labels: {
                  boxWidth: 20, // Adjust as needed
                  padding: 5 // Adjust as needed
                }
              },
              title: {
                display: true,
                text: 'Various Metrics'
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
.chart4 {
  width: 100%;
  height: 100%;
  margin: 0 auto;
}
</style>