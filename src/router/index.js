import { createRouter, createWebHistory } from 'vue-router';
import Edit from '../components/edit.vue';
import App from '../App.vue';
import View from '../components/view.vue';

const history = createWebHistory();
const router = createRouter({
  history,
  routes: [
    {
      path: "/",
      component: App
    },
    {
      path: "/edit",
      component: Edit
    },
    {
      path: "/view",
      component: View
    }
  ]
})


export default router;