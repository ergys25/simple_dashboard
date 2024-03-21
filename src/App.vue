<template>
  <div id="app">
    <header>
      <Header/>
    </header>
    <nav>
      <Sidebar v-if="!isPhoneView" />
    </nav>

    <main>
      <router-view/>
    </main>
    <footer>
      <Footer/>
    </footer>
  </div>
</template>

<script>
import Dashboard from './components/Dashboard.vue';
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Sidebar from "@/components/Sidebar.vue";

export default {
  name: 'App',
  components: {
    Dashboard,
    Header,
    Footer,
    Sidebar
  },
  data() {
    return {
      isPhoneView: false
    };
  },
  mounted() {
    // Check if the viewport width is less than a certain value (e.g., for phones)
    this.checkIfPhoneView();
    // Listen for resize events to update the view if necessary
    window.addEventListener('resize', this.checkIfPhoneView);
  },
  methods: {
    checkIfPhoneView() {
      // Define the maximum width for phone view
      const maxPhoneWidth = 768; // Adjust as needed
      // Update isPhoneView based on viewport width
      this.isPhoneView = window.innerWidth <= maxPhoneWidth;
    }
  },
  beforeDestroy() {
    // Remove the event listener when the component is destroyed to prevent memory leaks
    window.removeEventListener('resize', this.checkIfPhoneView);
  }
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
