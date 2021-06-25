<script>
	import { onMount } from 'svelte';
	import Router from 'svelte-spa-router';
	import routes from './routes';

	onMount(async () => {
		// @TODO: Get some app data.

	});	
</script>

<main>
	<Router {routes} />
</main>

<style>
	main {
    min-height: 100vh;
    background-color: #ccc;
  }
</style>