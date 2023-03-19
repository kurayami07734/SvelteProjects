<script lang="ts">
    import { pokemon } from "./stores/pokestore";
</script>

<h1>Pokedex</h1>
<svelte:head>
	<title>Pokedex</title>
</svelte:head>

{#each $pokemon as pokeman}
    <h2>{pokeman.name}</h2>
    <img src={pokeman.image} alt="image of {pokeman.name}">
{/each}

<style>
	h1 {
		color: red;
	}
</style>
