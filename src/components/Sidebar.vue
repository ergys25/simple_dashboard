<template>
  <aside class="sidebar" :class="{ 'active': sidebarVisible }" @mouseenter="toggleSidebar(true)" @mouseleave="toggleSidebar(false)">
    <div class="logo">
      <h2>Simple Dashboard</h2>
    </div>
    <ul class="nav-links">
      <li><router-link :to="{ name: 'Chart1' }">Chart 1</router-link></li>
      <li><router-link :to="{ name: 'Chart2' }">Chart 2</router-link></li>
      <li><router-link :to="{ name: 'Chart3' }">Chart 3</router-link></li>
      <li><router-link :to="{ name: 'Chart4' }">Chart 4</router-link></li>
    </ul>
  </aside>
</template>

<script>
export default {
  name: 'DarkSidebar',
  data() {
    return {
      sidebarVisible: false
    };
  },
  methods: {
    toggleSidebar(isVisible) {
      this.sidebarVisible = isVisible;
    }
  }
};
</script>

<style scoped>
.sidebar {
  background-color: #2c3e50;
  color: #fff;
  width: 250px;
  height: 100%;
  position: fixed;
  top: 0;
  left: -250px;
  transition: left 0.3s ease;
  padding: 20px;
}

.sidebar.active {
  left: 0;
}

.logo h2 {
  margin: 0;
}

.nav-links {
  list-style: none;
  padding: 0;
  margin-top: 20px;
}

.nav-links li {
  margin-bottom: 10px;
}

.nav-links a {
  text-decoration: none;
  color: #fff;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.nav-links a:hover {
  text-decoration: underline;
}

.sidebar:hover .nav-links a {
  opacity: 1;
}

.sample-text {
  margin-top: 20px;
}

.sample-text p {
  color: #ccc;
}
</style>
