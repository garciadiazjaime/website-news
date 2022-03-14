<script>
  import Lazy from 'svelte-lazy';

  export let index
  export let link
  export let title
  export let subtitle
  export let image
  export let content

	let isOpen = false

	function clickHandler(event) {
		event.preventDefault()

		isOpen = true
	}
</script>

<style>
	img {
		height: 454px;
		width: 100%;
		object-fit: cover;
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

	.read-more {
		text-decoration: underline;
	}
</style>

<small>{index}</small>
<h2>
  <a href={link} target="_blank" rel="nofollow noreferrer">
    {title}
  </a>
</h2>
<strong>{subtitle}</strong>
<Lazy height={300}>
  <img src={image} alt={title} />
</Lazy>
<div class="description">
  {#each content.slice(0, isOpen ? content.length : 3) as description}
    <p>{description}</p>
  {/each}
</div>


{#if !isOpen}
<p>
	<a class="read-more" href="/" on:click={clickHandler}>leer toda la noticia</a>
</p>
{/if}
