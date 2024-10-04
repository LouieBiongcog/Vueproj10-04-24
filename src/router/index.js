import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import Todo from '../components/Todo.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/todo', component: Todo }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
