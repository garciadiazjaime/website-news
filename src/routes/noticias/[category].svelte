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
		ucrania: {
			title: ' Últimas Noticias sobre Ucrania',
			description: 'Conoce las Últimas Noticias sobre Ucrania.'
		}
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
	ul {
		padding: 0;
		list-style-type: none;
	}

	li {
		margin: 40px 0;
	}

	img {
		height: 454px;
		width: 100%;
		object-fit: cover;
	}

	.cover {
		padding: 220px 0;
		background-color: #db1a22;
		color: white;
		text-align: center;	
	}

	h2, h3, p {
		padding: 0 12px;
	}

	a {
		text-decoration: none;
	}

	small {
		height: 24px;
		width: 24px;
		background-color: #db1a22;
		color: white;
		border-radius: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 12px;
		font-weight: bold;
		margin-left: 12px;
	}

	p {
		word-break: break-word;
	}
</style>

<svelte:head>
	<title>{sections[category].title}</title>
	<meta property="og:title" content={sections[category].title}>
	<meta property="og:description" content={sections[category].description}>
	<meta name="description" content={sections[category].description}>
</svelte:head>

<div class="cover">
	<h1>{sections[category].title}</h1>
</div>

<ul>
	{#each news as item, index}
	<li>
		<small>{index+1}</small>
		<h2>
			<a href={item.url} target="_blank" rel="nofollow noreferrer">
				{item.title}
			</a>
		</h2>
		<h3>noticia de {item.source}</h3>
		<Lazy height={300}>
			<img src={item.image} alt={`Noticia: ${item.title}`} />
		</Lazy>
		<div class="description">
			{#each item.description as description}
				<p>{description}</p>
			{/each}
		</div>
	</li>
	{/each}
</ul>

<p>{sections[category].description}</p>
