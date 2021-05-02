import {createRouter, createWebHashHistory} from "vue-router"
import Home from "./views/Home.vue"

const history = createWebHashHistory()
export const router = createRouter({
	history: history,
	routes: [{
		path: '/',
		component: Home
	}, {
		path: '/doc',
		component: () => import('./views/Doc.vue'),
		children: [
			{path: 'intro', component: () => import('./views/Intro.vue')},
			{path: 'install', component: () => import('./views/Install.vue')},
			{path: 'get-started', component: () => import('./views/GetStart.vue')},
			{path: 'switch', component: () => import('./components/SwitchDemo.vue')},
			{path: 'button', component: () => import('./components/ButtonDemo.vue')},
			{path: 'selector', component: () => import('./components/SelectorDemo.vue')},
			{path: 'dialog', component: () => import('./components/DialogDemo.vue')},
			{path: 'tabs', component: () => import('./components/TabsDemo.vue')}
			]
	}]
})

