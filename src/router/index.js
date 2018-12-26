import Vue from 'vue'
import Router from 'vue-router'

import Top from '../components/Top'
import page1 from '../components/page1'
import page2 from '../components/page2'
import Profile from '../components/Profile'
import Works from '../components/Works'
import Article from '../components/Article'

Vue.use(Router)

export default new Router({
    mode: 'history', 
    routes: [
        {path: '/', component: Top}, 
        {path: '/page1/', component: page1},
        {path: '/page2',component: page2},
        {path: '/Profile', component: Profile},
        {path: '/Works', component: Works},
        {path: '/Article?id=:id', name: 'article', component: Article}
    ]
})