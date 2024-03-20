<template>
  <nav class="navbar">
    <div class="container">
      <h1 class="logo">Lorem Ipsum</h1>
      <ul class="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'DarkNavbar',
};
</script>

<style scoped>
.navbar {
  background-color: #333; /* Dark background color */
  color: #fff; /* White text color */
  padding: 10px 0;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.logo {
  margin: 0;
  font-size: 24px;
}

.nav-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-links li {
  display: inline;
  margin-right: 20px;
}

.nav-links li:last-child {
  margin-right: 0;
}

.nav-links a {
  text-decoration: none;
  color: #fff;
  font-size: 16px;
}

.nav-links a:hover {
  text-decoration: underline;
}
</style>
