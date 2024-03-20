<template>
  <div>
    <canvas ref="chartCanvas"></canvas>
  </div>
</template>

<script>
import { Pie, mixins } from 'vue-chartjs';

export default {
  extends: Pie,
  mixins: [mixins.reactiveData],

  data() {
    return {
      chartData: {
        labels: [],
        datasets: [
          {
            label: 'Various Metrics',
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
            data: [],
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
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
        const response = await fetch('http://178.18.253.143:8080/sp-api/spr_Funnel/2024-02-01%2000:00:00&2024-02-29%2000:00:00');
        const data = await response.json();
        // Assuming 'recordset' contains the data we need
        Object.entries(data.recordset[0]).forEach(([key, value]) => {
          // Exclude keys that are not metrics
          if (key !== 'Date' && key !== 'Vessel') {
            this.chartData.labels.push(key);
            this.chartData.datasets[0].data.push(value);
          }
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
