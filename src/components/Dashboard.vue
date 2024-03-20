<template>
  <div>
    <Header />
    <div class="dashboard">
      <Sidebar />
      <div class="content">
        <div class="main">
          <div class="charts">
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
    <Footer />
  </div>
</template>

<script>
import Header from "./Header.vue";
import Sidebar from './Sidebar.vue';
import Footer from './Footer.vue';
import Chart1 from './Chart1.vue';
import Chart2 from './Chart2.vue';
import Chart3 from './Chart3.vue';
import Chart4 from './Chart4.vue';

export default {
  components: {
    Header,
    Sidebar,
    Footer,
    Chart1,
    Chart2,
    Chart3,
    Chart4
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
}

.main {
  flex: 1;
}

.charts {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.chart-container {
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.chart-container canvas {
  width: 100%;
  height: 100%;
}

.sidebar {
  width: 200px;
  background-color: #343a40;
  color: white;
}

.sidebar h1 {
  padding: 20px;
  margin: 0;
}

.sidebar .menu {
  padding: 20px;
}

.menu a {
  display: block;
  color: white;
  text-decoration: none;
  padding: 10px 0;
}

.menu a:hover {
  background-color: #555;
}

.header {
  background-color: #343a40;
  color: white;
  padding: 20px;
  text-align: center;
}

.footer {
  background-color: #343a40;
  color: white;
  padding: 20px;
  text-align: center;
}
</style>
