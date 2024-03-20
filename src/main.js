import './assets/main.css'
import { Chart, registerables } from 'chart.js';
import 'chartjs-adapter-date-fns';
Chart.register(...registerables);
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
