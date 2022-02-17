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
			font-size: 1.4em;
			padding: 0;
		}
	}

	footer {
		padding: 0 12px;
	}
</style>

<Nav {segment}/>

<main>
	<slot></slot>
</main>

<p>
	Noticias México, tiene como objectivo dar a conocer las últimas noticias que los diferentes
	medios de comunicación publican en México. La intención es tenerte informado de los acontecimientos
	que suceden en nuestro país a través de una plataforma rápida y amigable.
</p>
<footer>
	Proyecto en Colaboración con: 
	<ul>
		<li><a href="https://www.garitacenter.com/">Reporte de Garitas</a></li>
		<li><a href="https://www.feedmetj.com/">Restaurantes en Tijuana</a></li>
		<li><a href="https://www.noticiasmexico.org/">Las Últimas noticias de México</a></li>
		<li><a href="https://www.comprarcasatijuana.com/">Comprar Casa en Tijuana</a></li>
		<li><a href="https://www.larutadelvinoensenada.com/">La Ruta del Vino Ensenada</a></li>
		<li><a href="https://www.mintitmedia.com/">Desarrollo Web en Tijuana</a></li>
	</ul>
</footer>

