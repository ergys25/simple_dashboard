import { createApp } from 'vue';
import { Chart, registerables } from 'chart.js';
import 'chartjs-adapter-date-fns';
import router from './router'; // Import the router configuration
import './assets/main.css'; // Import your main CSS file
import App from './App.vue';

// Register Chart.js plugins
Chart.register(...registerables);

// Create the Vue application instance with router and mount it to the #app element in your HTML
createApp(App)
    .use(router) // Use the router configuration
    .mount('#app');
