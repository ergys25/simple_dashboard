<template>
  <div class="chart4-container">
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
        // Make API call to fetch data
        const response = await fetch('http://178.18.253.143:8080/sp-api/spr_Funnel/2024-02-01%2000:00:00&2024-02-29%2000:00:00');
        const data = await response.json();

        // Extracting data from the response
        this.chartData = data.recordsets[0][0];

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
            maintainAspectRatio: false, // To make the chart responsive
            plugins: {
              legend: {
                position: 'bottom'
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
.chart4-container {
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
