import {createWebHashHistory, createRouter} from 'vue-router';
import Home from './view/Home.vue';
import Doc from './view/Doc.vue';
import SwitchDemo from './components/SwitchDemo.vue';
import ButtonDemo from './components/ButtonDemo.vue';
import DialogsDemo from './components/DialogsDemo.vue';
import TabsDemo from './components/TabsDemo.vue';
import DocDomeDemo from './components/DocDome.vue';

const history = createWebHashHistory();
export default createRouter({
  history: history,
  routes: [
    {path: '/', component: Home},
    {
      path: '/doc', component: Doc, children: [
        {path: '', component: DocDomeDemo},
        {path: 'switch', component: SwitchDemo},
        {path: 'button', component: ButtonDemo},
        {path: 'dialogs', component: DialogsDemo},
        {path: 'tabs', component: TabsDemo},
      ]
    }
  ]
});
