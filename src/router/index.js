import Vue from 'vue'
import Router from 'vue-router'

import Top from '../components/Top';
import page1 from '../components/page1'
import page2 from '../components/page2'
import Works from '../components/Works'

Vue.use(Router)

export default new Router({
    mode: 'history', 
    routes: [
        {path: '/', component: Top}, 
        {path: '/page1', component: page1},
        {path: '/page2',component: page2},
        {path: '/Works',component: Works}
    ]
})