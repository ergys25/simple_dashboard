<template>
  <aside class="sidebar" :class="{ 'active': sidebarVisible }" @mouseenter="toggleSidebar(true)" @mouseleave="toggleSidebar(false)">
    <div class="logo">
      <h2>Lorem Ipsum</h2>
    </div>
    <ul class="nav-links">
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Services</a></li>
      <li><a href="#">Contact</a></li>
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
  background-color: #333; /* Dark background color */
  color: #fff; /* White text color */
  width: 250px;
  height: 100%;
  position: fixed;
  top: 0;
  left: -230px; /* Initially hide the sidebar */
  transition: left 0.3s ease; /* Add transition effect */
  padding: 20px;
}

.sidebar.active {
  left: 0; /* Move the sidebar to display */
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
</style>
