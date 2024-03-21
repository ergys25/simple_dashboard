import { createRouter, createWebHistory } from 'vue-router';
import About from '../views/About.vue';
import Services from '../views/Services.vue';
import Contact from '../views/Contact.vue';
import Dashboard from "@/views/Dashboard.vue";
import Char1View from "@/views/Char1View.vue";
import Char2View from "@/views/Char2View.vue";
import Char3View from "@/views/Char3View.vue";
import Char4View from "@/views/Char4View.vue";

const router = createRouter({
    history: createWebHistory('/'),
    routes: [
        {
            path: '/',
            name: 'Dashboard',
            component: Dashboard,
        },
        {
            path: '/about',
            name: 'About',
            component: About,
        },
        {
            path: '/services',
            name: 'Services',
            component: Services,
        },
        {
            path: '/contact',
            name: 'Contact',
            component: Contact,
        },
        {
            path: '/char1',
            name: 'Chart1',
            component: Char1View,
        },
        {
            path: '/char2',
            name: 'Chart2',
            component: Char2View,
        },
        {
            path: '/char3',
            name: 'Chart3',
            component: Char3View,
        },
        {
            path: '/char4',
            name: 'Chart4',
            component: Char4View,
        },
    ],
});

export default router;