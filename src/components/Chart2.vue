<template>
  <div>
    <canvas ref="chartCanvas"></canvas>
  </div>
</template>

<script>
import { Bar, mixins } from 'vue-chartjs';

export default {
  extends: Bar,
  mixins: [mixins.reactiveData],

  data() {
    return {
      chartData: {
        labels: [],
        datasets: [
          {
            label: 'Avg Dead Time per Berthing',
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
        const response = await fetch('http://178.18.253.143:8080/sp-api/spr_TopXVesselsDeadTime/15');
        const data = await response.json();
        // Assuming 'recordset' contains the data we need
        data.recordset.forEach(record => {
          this.chartData.labels.push(record.Vessel);
          this.chartData.datasets[0].data.push(record.AvgDeadTimePerBerthing);
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
