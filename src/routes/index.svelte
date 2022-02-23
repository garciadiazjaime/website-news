<script>
	import Lazy from 'svelte-lazy';

	export let news
	const title = 'Últimas Noticias de México. Entérate de los últimos acontecimientos.'
	const description = 'Noticias de México hoy. Conoce las Noticias de Últimas hora de México. Sucesos actuales, política, negocios, deportes y más.'
</script>

<script context="module">
	export async function preload() {
		const response = await this.fetch('process.env.API_URL/news')
		const news = await response.json();

		return {
			news: news.slice(0, 27)
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
	}
	img {
		width: 100%;
		height: 300px;
		object-fit: contain;
	}

	.content {
		padding: 12px;
	}
	.description {
		margin-bottom: 12px;
	}

	.description p {
		word-break: break-word;
	}

	a {
		text-decoration: none;
	}

	@media (max-width: 480px) {
		h1 {
			padding: 222px 0;
			background-color: #000;
			color: #FFF;
			text-align: center;
			margin-bottom: 20px;
		}
		.item {
			display: block;
		}
	}
</style>

<svelte:head>
	<title>{title}</title>
	<meta property="og:title" content={title}>
	<meta property="og:description" content={description}>
	<meta property="og:image" content="https://www.noticiasmexico.org/banner.webp">
	<meta property="og:url" content="https://www.noticiasmexico.org/">
	<meta name="description" content={description}>
	<link href="https://www.google-analytics.com" rel="dns-prefetch">
</svelte:head>

<h1>Últimas Noticias de México</h1>

{#each news as item, index}
<div class="item"
	data-date={item.createdAt}
	data-id={item._id}
	>
	<div class="content">
		<h2>
			{index + 1} - 
			<a href={item.url} target="_blank" rel="nofollow noreferrer">
				{item.title}
			</a>
		</h2>
	</div>
	<div class="image-container">
		<Lazy height={300}>
			<img src={item.image} alt={`Noticia: ${item.title}`} />
		</Lazy>
	</div>
	<div class="content">
		<div class="description">
			{#each item.description as description}
				<p>{description}</p>
			{/each}
		</div>
		<span>noticia de {item.source}</span>
	</div>
</div>
{/each}

<p>{description}</p>
