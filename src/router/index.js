import { createRouter, createWebHistory } from 'vue-router';
import Edit from '../components/edit.vue';
import Form from '../components/Form.vue';
import View from '../components/view.vue';
import Page from '../components/Page.vue';

const history = createWebHistory();
const router = createRouter({
  history,
  routes: [
    {
      path: "/",
      component: Form
    },
    {
      path: "/edit/:id",
      component: Edit
    },
    {
      path: "/view",
      component: View
    },
    {
      path: "/page",
      component: Page
    }
  ]
})


export default router;