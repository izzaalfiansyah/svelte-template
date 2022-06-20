<script lang="ts">
	import Router, { link } from 'svelte-spa-router';
	import Sidebar from './components/Sidebar.svelte';
	import { routes } from './router';

	let sidebarOpen = false;
</script>

<div class="min-h-screen bg-gray-100 text-gray-800">
	<div class="bg-blue-500 sticky top-0 shadow z-20 h-14 shadow flex items-center text-white">
		<ul class="flex font-semibold">
			{#each [{ path: '/', title: 'Home' }, { path: '/about', title: 'About' }] as item}
				<li>
					<a href={item.path} use:link class="px-4">{item.title}</a>
				</li>
			{/each}
		</ul>
	</div>
	<div class="min-h-90vh">
		<div class="flex flex-wrap">
			<Sidebar open={sidebarOpen} class="w-[320px]"></Sidebar>
			<div class="lg:w-[calc(100%-320px)] w-full p-3">
				<Router {routes} />
			</div>
		</div>
	</div>
</div>
