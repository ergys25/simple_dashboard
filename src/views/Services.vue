<template>
  <div class="services-container">
    <div class="services">
      <h1>Our Services</h1>
      <p>Discover the range of services we offer:</p>
      <!-- List of Services -->
      <ul>
        <li>Service 1</li>
        <li>Service 2</li>
        <li>Service 3</li>
        <!-- Add more services here -->
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Services',
};
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

.services-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #222;
}

.services {

  text-align: center;
  font-family: 'Roboto', sans-serif;
  color: #fff;
  padding: 20px;
}

.services h1 {
  font-size: 2.5rem;
}

.services p {
  margin-bottom: 20px;
}

.services ul {
  list-style-type: none;
  padding: 0;
}

.services li {
  margin-bottom: 10px;
}

</style>
