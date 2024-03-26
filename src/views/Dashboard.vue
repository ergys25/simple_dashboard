<template>
  <div>
    <div class="dashboard">
      <div class="content">
        <div class="main">
          <div class="chart-grid">
            <div class="chart-container">
              <Chart1 />
            </div>
            <div class="chart-container">
              <Chart2 />
            </div>
            <div class="chart-container">
              <Chart3 />
            </div>
            <div class="chart-container">
              <Chart4 />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import Chart1 from '../components/Chart1.vue';
import Chart2 from '../components/Chart2.vue';
import Chart3 from '../components/Chart3.vue';
import Chart4 from '../components/Chart4.vue';

export default {
  components: {
    Chart1,
    Chart2,
    Chart3,
    Chart4
  },
  data() {
    return {
      isPhoneView: false
    };
  },
  mounted() {
    this.checkView();
    window.addEventListener('resize', this.checkView);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.checkView);
  },
  methods: {
    checkView() {
      this.isPhoneView = window.innerWidth <= 600; // Adjust the breakpoint as needed
    }
  }
};
</script>

<style scoped>
.dashboard {
  display: flex;
  min-height: 100vh;
}

.content {
  flex: 1;
  padding: 20px;
  display: flex;
  justify-content: center;
}

.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.chart-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  max-width: 1200px;
  width: 100%;
  justify-content: center;
}

.chart-container {
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  transition: all 0.3s;
}

.chart-container canvas {
  width: 100%;
  height: 100%;
}

@media only screen and (max-width: 600px) {
  .chart-grid {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
