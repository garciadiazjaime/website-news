<script>
	import Lazy from 'svelte-lazy';

	import { publish } from "../../support/events"

	export let news
	export let category

	publish('update_menu', category)

	const sections = {
		negocios: {
			title: 'Últimas Noticias de México sobre Negocios',
			description: 'Conoce las Últimas Noticias sobre Negocios de México.'
		},
		politica: {
			title: 'Últimas Noticias de México sobre Política',
			description: 'Conoce las Últimas Noticias sobre Política.'
		},
		deportes: {
			title: ' Últimas Noticias de México sobre Deportes',
			description: 'Conoce las Últimas Noticias sobre Deportes.'
		},
	}
</script>

<script context="module">
	export async function preload(page) {
		const { category } = page.params;
		const response = await this.fetch(`process.env.API_URL/news/${category}`)
		const news = await response.json();

		return {
			news,
			category
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
	<title>{sections[category].title}</title>
	<meta property="og:title" content={sections[category].title}>
	<meta property="og:description" content={sections[category].description}>
	<meta property="og:image" content="https://www.noticiasmexico.org/banner.webp">
	<meta property="og:url" content="https://www.noticiasmexico.org/">
	<meta name="description" content={sections[category].description}>
	<link href="https://www.google-analytics.com" rel="dns-prefetch">
</svelte:head>

<h1>{sections[category].title}</h1>

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

<p>{sections[category].description}</p>
