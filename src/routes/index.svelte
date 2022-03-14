<script>
	import Lazy from 'svelte-lazy';

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

	h2, p {
		padding: 0 12px;
		margin-bottom: 0;
	}

	strong {
		font-weight: normal;
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
		<small>{index+1}</small>
		<h2>
			<a href={item.url} target="_blank" rel="nofollow noreferrer">
				{item.title}
			</a>
		</h2>
		<strong>Noticia de {item.source}</strong>
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

<p>{description}</p>
