import { createApp } from 'vue';
import { Chart, registerables } from 'chart.js';
import 'chartjs-adapter-date-fns';
import router from './router';
import './assets/main.css';
import App from './App.vue';


Chart.register(...registerables);


createApp(App)
    .use(router) // Use the router configuration
    .mount('#app');
