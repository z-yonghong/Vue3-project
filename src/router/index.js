import { createRouter, createWebHistory } from 'vue-router';
import Edit from '../components/edit.vue';
import Form from '../components/Form.vue';
import View from '../components/view.vue';

const history = createWebHistory();
const router = createRouter({
  history,
  routes: [
    {
      path: "/",
      component: Form
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