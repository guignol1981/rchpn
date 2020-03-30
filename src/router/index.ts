import Vue from 'vue';
import VueRouter from 'vue-router';
import PageLogin from '../pages/page-login.vue';
import PageTableauDeBord from '../pages/page-tableau-de-bord.vue';

Vue.use(VueRouter);

export enum NomsRoutes {
	Login = 'login',
	TableaudeBord = 'tableau-de-bord'
}

export const routerFactory: (basePath: string) => VueRouter = (
	basePath: string
) => {
	const routes = [
		{
			path: '/',
			name: NomsRoutes.TableaudeBord,
			component: PageTableauDeBord
		},
		{
			path: '/login',
			name: NomsRoutes.Login,
			component: PageLogin
		}
	];

	const router = new VueRouter({
		mode: 'history',
		base: basePath,
		routes
	});

	return router;
};
