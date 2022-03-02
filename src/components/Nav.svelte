<script>
	import { publish, subscribe } from "../support/events"
	export let segment;

	subscribe('update_menu', (path) => {
		segment = path
	})

	function clickHandler() {
		publish('update_menu', this.attributes.href.value.split('/').pop())
	}
</script>

<style>
	nav {
		border-bottom: 1px solid rgba(255,62,0,0.1);
		font-weight: 300;
		padding: 0 1em;
	}

	ul {
		margin: 0;
		padding: 0;
	}

	/* clearfix */
	ul::after {
		content: '';
		display: block;
		clear: both;
	}

	li {
		display: block;
		float: left;
	}

	[aria-current] {
		position: relative;
		display: inline-block;
	}

	[aria-current]::after {
		position: absolute;
		content: '';
		width: calc(100% - 1em);
		height: 2px;
		background-color: rgb(255,62,0);
		display: block;
		bottom: -1px;
	}

	a {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
	}
</style>

<nav>
	<ul>
		<li><a aria-current="{segment === undefined ? 'page' : undefined}" href="." on:click={clickHandler}>Noticias</a></li>
		<li><a aria-current="{segment === 'negocios' ? 'page' : undefined}" href="noticias/negocios" on:click={clickHandler}>Negocios</a></li>
		<li><a aria-current="{segment === 'politica' ? 'page' : undefined}" href="noticias/politica" on:click={clickHandler}>Política</a></li>
		<li><a aria-current="{segment === 'deportes' ? 'page' : undefined}" href="noticias/deportes" on:click={clickHandler}>Deportes</a></li>
		<li><a aria-current="{segment === 'ucrania' ? 'page' : undefined}" href="noticias/ucrania" on:click={clickHandler}>Ucrania</a></li>
	</ul>
</nav>
