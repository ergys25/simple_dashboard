<template>
  <nav class="navbar">
    <div class="container">
      <img class="logo" src='../assets/logo.svg' alt="Logo">
      <ul class="nav-links">
        <li><router-link :to="{ name: 'Dashboard' }">Dashboard</router-link></li>
        <li><router-link :to="{ name: 'About' }">About</router-link></li>
        <li><router-link :to="{ name: 'Services' }">Services</router-link></li>
        <li><router-link :to="{ name: 'Contact' }">Contact</router-link></li>
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

*{
  font-family : 'Roboto', sans-serif;
}

.navbar {
  background-color: #333;
  color: #fff;
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
  height:30px;
  width:30px;

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
