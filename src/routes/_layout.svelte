<script>
	import Nav from '../components/Nav.svelte';

	export let segment;
</script>

<style>
	main {
		position: relative;
		max-width: 1280px;
		background-color: white;
		margin: 0 auto;
		box-sizing: border-box;
		padding: 12px;
	}

	@media (max-width: 480px) {
		main {
			font-size: 1.2em;
			padding: 0;
		}
	}
</style>

<Nav {segment}/>

<main>
	<slot></slot>
</main>
