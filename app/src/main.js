import Vue from 'vue';
import App from './App.vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import Menu from "./views/Menu";
import VideoPlayer from "./components/VideoPlayer";
import FileDrop from "./components/FileDrop";
import MainPage from "./components/MainPage";

import router from './router';
import store from './store';
import './mixins';

import '../public/scss/global.scss';

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.component('Menu', Menu);
Vue.component('video-player', VideoPlayer);
Vue.component('file-drop', FileDrop);
Vue.component('main-page', MainPage);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
