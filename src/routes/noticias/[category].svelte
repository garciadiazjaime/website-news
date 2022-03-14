<script>
	import Card from '../../components/Card.svelte'
	import Cover from '../components/Cover.svelte'

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
</style>

<svelte:head>
	<title>{sections[category].title}</title>
	<meta property="og:title" content={sections[category].title}>
	<meta property="og:description" content={sections[category].description}>
	<meta name="description" content={sections[category].description}>
</svelte:head>

<Cover title={sections[category].title} />

<ul>
	{#each news as item, index}
	<li>
		<Card 
			index={index+1}
			lint={item.url}
			title={item.title}
			subtitle={`Noticia de ${item.source}`}
			image={item.image}
			content={item.description}
		/>
	</li>
	{/each}
</ul>

<p>{sections[category].description}</p>
