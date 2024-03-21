<template>
  <aside class="sidebar" :class="{ 'active': sidebarVisible }" @mouseenter="toggleSidebar(true)" @mouseleave="toggleSidebar(false)">
    <div class="logo">
      <h2>Simple Dashboard</h2>
    </div>
    <ul class="nav-links">
      <li><router-link :to="{ name: 'Home' }">Home</router-link></li>
      <li><router-link :to="{ name: 'About' }">About</router-link></li>
      <li><router-link :to="{ name: 'Services' }">Services</router-link></li>
      <li><router-link :to="{ name: 'Contact' }">Contact</router-link></li>
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

.sample-text {
  margin-top: 20px;
}

.sample-text p {
  color: #ccc; /* Sample text color */
}
</style>
