import Vue from 'vue';
import App from './App.vue';
import Order from '@/components/Order.vue';
import Sort from '@/components/Sort.vue';
import Index from '@/components/Index.vue';
import My from '@/components/My.vue';
import Index1 from '@/view/Index1.vue';
import Index2 from '@/view/Index2.vue';
import Index3 from '@/view/Index3.vue';
import Index4 from '@/view/Index4.vue';
import Thor from '@/Science/Thor.vue';
import Panther from '@/Science/Panther.vue';
import Venom from '@/Science/Venom.vue';
import Dead from '@/Science/Dead.vue';

import VueRouter from 'vue-router';
Vue.use(VueRouter);

const routes = [
  { path: '/', redirect: '/Index' },
  { path: '/Order', component: Order },
  {
    path: '/Sort',
    component: Sort,
    children: [
      { path: 'Index1', component: Index1 },
      { path: 'Index2', component: Index2 },
      { path: 'Index3', component: Index3 },
      {
        path: 'Index4',
        component: Index4,
        children: [
          { path: 'Thor', component: Thor },
          { path: 'Panther', component: Panther },
          { path: 'Venom', component: Venom },
          { path: 'Dead', component: Dead },
        ],
      },
    ],
  },
  { path: '/Index', component: Index },
  { path: '/My', component: My },
];

const router = new VueRouter({
  routes,
});
Vue.config.productionTip = false;
new Vue({
  render: (h) => h(App),
  router,
}).$mount('#app');
