<script>
	import { onMount } from 'svelte';

	export let news
	let Lazy;

	onMount(async () => {
		const module = await import('svelte-lazy');
		Lazy = module.default;
	});

	function itemClickHandler(url) {
		window.open(url, "new_blank")
	}
</script>

<script context="module">
	export async function preload() {
		const response = await this.fetch('/news.json');
		const news = await response.json();

		return {
			news
		}
	}
</script>

<style>
	.item {
		margin-bottom: 52px;
	}

	.image-container {
		margin: 0 auto;
		width: 100%;
		overflow: hidden;
	}
	.image {
		width: 100%;
		height: 400px;
		display: block;
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
	}

	.content {
		padding: 12px;
		flex: 400px;
	}
	.description {
		margin-bottom: 12px;
	}

	.btn:hover {
		cursor: pointer;
	}

	@media (max-width: 480px) {
		h1 {
			padding: 12px;
			margin: 0;
			background-color: #000;
			color: #FFF;
			text-align: center;
		}
		.item {
			display: block;
		}
		.image-container {
			height: 400px;
			width: 100%;
		}
		.image {
			width: 100%;
			height: 400px;
		}
	}
</style>

<svelte:head>
	<title>Últimas Noticias de México</title>
</svelte:head>

<h1>Noticias de México</h1>

{#each news as item}
<div class="item"
	data-source={item.source}
	data-date={item.createdAt}>
	<div class="image-container">
		<svelte:component this={Lazy} height={300}>
			<div class="image" style={`background-image: url(${item.image})`}></div>
		</svelte:component>
	</div>
	<div class="content">
		<h2>{item.title}</h2>
		<div class="description">
			{#each item.description as description}
				<p>{description}</p>
			{/each}
		</div>
		<div class="btn" on:click={() => itemClickHandler(item.url)}>ir a noticia original @{item.source}</div>
	</div>
</div>
{/each}
