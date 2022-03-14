<script>
	import Card from '../components/Card.svelte'

	export let news
	const title = 'Últimas Noticias de México Hoy. Política, Negocios, Deportes'
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
	ul {
		padding: 0;
		list-style-type: none;
	}

	li {
		margin: 40px 0;
	}

	.cover {
		padding: 220px 0;
		background-color: #db1a22;
		color: white;
		text-align: center;	
	}
</style>

<svelte:head>
	<title>{title}</title>
	<meta property="og:title" content={title}>
	<meta property="og:description" content={description}>
	<meta name="description" content={description}>
</svelte:head>

<div class="cover">
	<h1>Últimas Noticias de México</h1>
</div>

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

<p>{description}</p>
