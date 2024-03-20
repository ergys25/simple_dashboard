<template>
  <div>
    <canvas ref="chartCanvas"></canvas>
  </div>
</template>

<script>
import { Bar, reactiveData, reactiveProp } from 'vue-chartjs';

export default {
  extends: Bar,
  mixins: [reactiveData, reactiveProp],

  data() {
    return {
      chartData: {
        labels: [],
        datasets: [
          {
            label: 'Total Laytime',
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
            data: [],
          },
          {
            label: 'Avg Laytime',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
            data: [],
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
            },
          }],
        },
      },
    };
  },

  async created() {
    await this.fetchData();
    this.renderChart(this.chartData, this.options);
  },

  methods: {
    async fetchData() {
      try {
        // Replace the API URL with your actual endpoint
        const response = await fetch('http://178.18.253.143:8080/sp-api/spr_topXLaytime/2024-02-01%2000:00:00&2024-02-29%2000:00:00&15');
        const data = await response.json();

        // Extract data from the response
        const records = data.recordsets[0] || [];

        // Clear previous data
        this.chartData.labels = [];
        this.chartData.datasets[0].data = [];
        this.chartData.datasets[1].data = [];

        // Populate chart data
        records.forEach(record => {
          this.chartData.labels.push(record.Vessel);
          this.chartData.datasets[0].data.push(record.TotalLaytime);
          this.chartData.datasets[1].data.push(record.AvgLaytime);
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
  },
};
</script>

<style scoped>
/* Add scoped styles if needed */
</style>
