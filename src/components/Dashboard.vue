<template>
  <div class="dashboard">
    <div class="chart-container">
      <Chart1 />
    </div>
<!--    <div class="chart-container">-->
<!--      <Chart2 />-->
<!--    </div>-->
<!--    <div class="chart-container">-->
<!--      <Chart3 />-->

<!--    </div>-->
<!--    <div class="chart-container">-->
<!--      <Chart4 />-->
<!--    </div>-->
  </div>
</template>

<script>
import Chart1 from './Chart1.vue';
import Chart2 from './Chart2.vue';
import Chart3 from './Chart3.vue';
import Chart4 from './Chart4.vue';

export default {
  components: {
    Chart1,
    Chart2,
    Chart3,
    Chart4,
  },
};
</script>

<style scoped>
.dashboard {
  display: flex;
  flex-wrap: wrap;
}

.chart-container {
  flex: 1 1 50%; /* Adjust as needed based on your layout preferences */
  padding: 10px;
}
</style>
