import {createWebHashHistory, createRouter} from 'vue-router';
import Home from './view/Home.vue';
import Doc from './view/Doc.vue';
import Switch from './components/Switch.vue';
import Button from './components/Button.vue';
import Dialogs from './components/Dialogs.vue';
import Tabs from './components/Tabs.vue';
import DocDome from './components/DocDome.vue';

const history = createWebHashHistory();
export default createRouter({
  history: history,
  routes: [
    {path: '/', component: Home},
    {
      path: '/doc', component: Doc, children: [
        {path: '', component: DocDome},
        {path: 'switch', component: Switch},
        {path: 'button', component: Button},
        {path: 'dialogs', component: Dialogs},
        {path: 'tabs', component: Tabs},
      ]
    }
  ]
});
