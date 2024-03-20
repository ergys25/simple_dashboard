<template>
  <div id="app">
    <header>
      <!-- Header content if needed -->
    </header>
    <main>
      <Dashboard />
    </main>
    <footer>
      <!-- Footer content if needed -->
    </footer>
  </div>
</template>

<script>
import Dashboard from './components/Dashboard.vue';

export default {
  name: 'App',
  components: {
    Dashboard,
  },
};
</script>

<style>
/* Add global styles if needed */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
main {
  flex: 1;
}
</style>
