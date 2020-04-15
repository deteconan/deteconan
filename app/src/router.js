import Vue from 'vue';
import Router from 'vue-router';

import Upload from './views/Upload';
import Episodes from "./views/Episodes";

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/upload',
            name: 'upload',
            component: Upload
        },
        {
            path: '/',
            name: 'episodes',
            component: Episodes
        }
    ]
});
