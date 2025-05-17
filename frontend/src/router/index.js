import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/Login.vue';
import Dashboard from '../views/Dashboard.vue';
import Projects from '../views/Projects.vue';
import Recon from '../views/Recon.vue';
import Scan from '../views/Scan.vue';
import Report from '../views/Report.vue';

const routes = [
  { path: '/', component: Login },
  { path: '/dashboard', component: Dashboard },
  { path: '/projects', component: Projects },
  { path: '/recon/:projectId', component: Recon },
  { path: '/scan/:projectId', component: Scan },
  { path: '/report/:projectId', component: Report }
];

export default createRouter({
  history: createWebHistory(),
  routes
});