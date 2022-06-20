import type { RouteDefinition } from 'svelte-spa-router';
import AboutSvelte from './pages/About.svelte';
import HomeSvelte from './pages/Home.svelte';

export const routes: RouteDefinition = {
	'/': HomeSvelte,
	'/about': AboutSvelte,
};
