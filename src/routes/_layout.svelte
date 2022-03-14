<script>
	import Nav from '../components/Nav.svelte';

	export let segment;
</script>

<style>
	main, footer {
		position: relative;
		max-width: 56em;
		background-color: white;
		margin: 0 auto;
		box-sizing: border-box;
		font-size: 1.2em;
	}
	ul {
		padding: 0;
		list-style-type: none;
	}
</style>

<Nav {segment}/>

<main>
	<slot></slot>
</main>

<footer>
	<p>
		Noticias México, tiene como objectivo dar a conocer las últimas noticias que los diferentes
		medios de comunicación publican en México. La intención es tenerte informado de los acontecimientos
		que suceden en nuestro país a través de una plataforma rápida y amigable.
	</p>

	<div>
		Síguenos en
		<ul>
			<li><a href="https://www.instagram.com/ultimasnoticiasmexico/" target="_blank" title="Últimas Noticias de México">Instagram</a></li>
		</ul>
	</div>
	
	
	<p>
		Proyecto en Colaboración con: 
	</p>
	<ul>
		<li><a href="https://www.garitacenter.com/">Reporte de Garitas Tijuana</a></li>
		<li><a href="https://www.feedmetj.com/">Restaurantes en Tijuana</a></li>
		<li><a href="https://www.playami.com/">Restaurantes en Playas de Tijuana</a></li>
		<li><a href="https://www.comprarcasatijuana.com/">Comprar Casa en Tijuana</a></li>
		<li><a href="https://www.larutadelvinoensenada.com/">La Ruta del Vino Ensenada</a></li>
		<li><a href="https://www.mintitmedia.com/">Desarrollo Web en Tijuana</a></li>
	</ul>
</footer>

