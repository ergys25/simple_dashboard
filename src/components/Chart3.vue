  <template>
    <div class="chart3">
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
          const response = await fetch('http://178.18.253.143:8080/sp-api/spr_occupancyByTime/2024-02-01%2000:00:00&2024-02-29%2000:00:00&0');
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
            type: 'line',
            data: {
              labels: this.chartData.map(item => item.DT),
              datasets: [
                {
                  label: 'Daily Berth Occupancy',
                  data: this.chartData.map(item => item.AllBerths),
                  fill: false,
                  borderColor: 'rgba(255, 99, 132, 0.6)',
                  tension: 0.1
                }
              ]
            },
            options: {
              scales: {
                x: {
                  type: 'time',
                  time: {
                    unit: 'day'
                  }
                },
                y: {
                  ticks: {
                    callback: function(value) {
                      return (value * 100).toFixed(2) + '%';
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
  .chart3 {
    width: 100%;
    height: 100%;
    margin: 0 auto;

  }
  </style>
