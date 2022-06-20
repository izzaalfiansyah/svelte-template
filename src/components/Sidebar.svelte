<script lang="ts">
	let className = 'w-[320px]';

	export { className as class };
	export let open = true;
	export let toggleSidebar = () => {
		open = !open;
	};
</script>

<div class="{className} h-screen bg-white shadow fixed top-0 left-0 bottom-0 z-10 transition transform lg:translate-x-0 {open ? 'translate-x-0' : '-translate-x-full'}" />
<div
  on:click={toggleSidebar}
  class="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-30 lg:hidden"
  class:hidden={!open}
/>
<div class="{className} lg:block hidden" />

<button class="z-20 fixed bottom-5 right-7 lg:hidden bg-blue-500 text-white rounded-full h-14 w-14 shadow transition hover:bg-blue-600" on:click={toggleSidebar}>
  =
</button>