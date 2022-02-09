<script>
	import Lazy from 'svelte-lazy';

	export let news
	const title = 'Noticias de hoy. Últimas Noticias de México'
	const description = 'Noticias de México hoy. Conoce las Noticias de Últimas hora de México. Sucesos actuales, política, negocios, deportes y más.'
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
	img {
		width: 100%;
		height: 400px;
		object-fit: cover;
	}

	.content {
		padding: 12px;
	}
	.description {
		margin-bottom: 12px;
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
		}
		.item {
			display: block;
		}
		.image-container {
			height: 400px;
			width: 100%;
		}
		img {
			width: 100%;
			height: 400px;
		}
	}
</style>

<svelte:head>
	<title>{title}</title>
	<meta property="og:title" content={title}>
	<meta property="og:description" content={description}>
	<meta property="og:image" content="https://www.noticiasmexico.org/banner.png">
	<meta property="og:url" content="https://www.noticiasmexico.org/">
	<meta name="description" content={description}>
	<link href="https://www.google-analytics.com" rel="dns-prefetch">
</svelte:head>

<h1>Últimas Noticias de México</h1>

{#each news as item}
<div class="item"
	data-source={item.source}
	data-date={item.createdAt}>
	<div class="content">
		<h2>{item.title}</h2>
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
		<a href={item.url} target="_blank" rel="nofollow noreferrer">noticia extraidas de {item.source}</a>
	</div>
</div>
{/each}

<footer>
	<p>
		Noticias México, tiene como objectivo dar a conocer las últimas noticias que los diferentes
		medios de comunicación publican en México. La intención es tenerte informado de los acontecimientos
		que suceden en nuestro país a través de una plataforma rápida y amigable.
	</p>
	<p>{description}</p>
	Proyecto en Colaboración con: <br />
	<a href="https://www.garitacenter.com/">Reporte de Garitas | Linea Tijuana / San Ysidro - Otay</a>
	<br />
	<a href="https://www.feedmetj.com/">¿Qué comer en Tijuana?</a>
	<br />
	<a href="http://www.playami.com">¿Qué comer en Playas de Tijuana?</a>
	<br />
	<a href="https://www.mintitmedia.com/">Desarrollo Web en Tijuana</a>
	<br />
	<a href="https://www.comprarcasatijuana.com/">Comprar casa en Tijuana</a>
	<br />
	<a href="http://www.larutadelvinoensenada.com/">La Ruta del Vino Ensenada</a>
</footer>
