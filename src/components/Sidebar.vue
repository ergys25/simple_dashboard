<template>
  <aside class="sidebar" :class="{ 'active': sidebarVisible }" @mouseenter="toggleSidebar(true)" @mouseleave="toggleSidebar(false)">
    <div class="logo">
      <h2>Simple Dashboard</h2>
    </div>
    <ul class="nav-links">
      <li><router-link :to="{ name: 'Chart1' }" exact>Chart 1</router-link></li>
      <li><router-link :to="{ name: 'Chart2' }" exact>Chart 2</router-link></li>
      <li><router-link :to="{ name: 'Chart3' }" exact>Chart 3</router-link></li>
      <li><router-link :to="{ name: 'Chart4' }" exact>Chart 4</router-link></li>
    </ul>
    <div class="expand-arrow" :class="{ 'active': sidebarVisible }"></div>
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


.nav-links{
  font-family:Roboto,serif;
  font-size:20px;
  font-weight:500;
  color:white;

}
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
  z-index: 1000;
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
}

.nav-links a:hover {
  text-decoration: underline;
}
.logo{
  font-family:Roboto,serif;
}

.expand-arrow {
  position: absolute;

  top: 50%;
  right: 20px;
  transform:translateX(+50%) translateY(-50%) rotate(90deg);
  width: 30px;
  height: 30px;
  background-color: #2c3e50;
  border-radius: 50%;
  border: 2px solid #fff;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.expand-arrow::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-45deg);
  width: 10px;
  height: 10px;
  border-top: 2px solid #fff;
  border-right: 2px solid #fff;
  transition: transform 0.3s ease;
}

.sidebar:hover .nav-links a {
  opacity: 1;
}

.sidebar:hover .expand-arrow {
  background-color: #34495e;
}

.active .expand-arrow {
  transform: translateY(-50%) rotate(0deg);
  background-color: #34495e;
}

.active .expand-arrow::after {
  transform: translate(-50%, -50%) rotate(-135deg);
  border-top: 2px solid #fff;
  border-right: 2px solid #fff;
}
</style>
