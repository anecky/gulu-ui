import {createWebHashHistory, createRouter} from 'vue-router';
import Home from './view/Home.vue';
import Doc from './view/Doc.vue';
import Switch from './components/Switch.vue';

const history = createWebHashHistory();
export default createRouter({
  history: history,
  routes: [
    {path: '/', component: Home},
    {
      path: '/doc', component: Doc, children: [
        {path: '/doc/switch', component: Switch}
      ]
    }
  ]
});
