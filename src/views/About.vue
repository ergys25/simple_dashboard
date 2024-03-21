<template>
  <div class="about-container">
    <div class="about">
      <h1>About Us</h1>
      <p>Welcome to our company! We specialize in providing excellent services to our clients.</p>
      <p>Our mission is to...</p>
      <!-- Add more content here -->
      <router-link to="/" class="back-link">Back to Home</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

.about-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #222;
}

.about {

  text-align: center;
  font-family: 'Roboto', sans-serif;
  color: #fff;
  padding: 20px;
}

.about h1 {
  font-size: 2.5rem;
}

.about p {
  margin-bottom: 20px;
}

.back-link {
  color: #fff;
  text-decoration: none;
  display: inline-block;
  margin-top: 20px;
}

.back-link:hover {
  text-decoration: underline;
}
</style>
