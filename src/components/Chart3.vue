<template>
  <div>
    <canvas ref="chartCanvas"></canvas>
  </div>
</template>

<script>
import { Line, mixins } from 'vue-chartjs';

export default {
  extends: Line,
  mixins: [mixins.reactiveData],

  data() {
    return {
      chartData: {
        labels: [],
        datasets: [
          {
            label: 'Daily Berth Occupancy',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
            data: [],
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: [{
            type: 'time',
            time: {
              unit: 'day',
            },
          }],
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
        const response = await fetch('http://178.18.253.143:8080/sp-api/spr_occupancyByTime/2024-02-01%2000:00:00&2024-02-29%2000:00:00&0');
        const data = await response.json();
        // Assuming 'recordset' contains the data we need
        data.recordset.forEach(record => {
          this.chartData.labels.push(record.Date);
          this.chartData.datasets[0].data.push(record.DailyBerthOccupancy);
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
