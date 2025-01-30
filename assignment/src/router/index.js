import { createRouter, createWebHistory } from 'vue-router';
import SignIn from '../components/SignIn.vue';
import Library from '../components/Library.vue';

const routes = [
  { path: '/', component: SignIn },
  { path: '/library', component: Library }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
