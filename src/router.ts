import {createWebHashHistory, createRouter} from 'vue-router';
import Home from './view/Home.vue';
import Doc from './view/Doc.vue';
import SwitchDemo from './components/SwitchDemo.vue';
import ButtonDemo from './components/ButtonDemo.vue';
import DialogsDemo from './components/DialogsDemo.vue';
import TabsDemo from './components/TabsDemo.vue';
import DocDomeDemo from './components/DocDome.vue';
import {h} from 'vue';
import Markdown from './components/Markdown.vue';

const md = filename => h(Markdown, {path: `../markdown/${filename}.md`, key: filename});

const history = createWebHashHistory();
export default createRouter({
  history: history,
  routes: [
    {path: '/', component: Home},
    {
      path: '/doc', component: Doc, children: [
        {path: '', component: DocDomeDemo},
        {path: 'intro', component: md('intro')},
        {path: 'get-started', component: md('get-started')},
        {path: 'install', component: md('install')},
        {path: 'switch', component: SwitchDemo},
        {path: 'button', component: ButtonDemo},
        {path: 'dialogs', component: DialogsDemo},
        {path: 'tabs', component: TabsDemo},
      ]
    }
  ]
});
