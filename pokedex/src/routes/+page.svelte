<script lang="ts">
	import { pokemon } from './stores/pokestore';
	import type { Pokeman } from './stores/pokestore';
	import PokemanCard from './pokemon/pokemanCard.svelte';
	let searchTerm = '';
	let filteredPokemon: Pokeman[] = [];
	$: {
		if (searchTerm) {
			filteredPokemon = $pokemon.filter((pokeman) =>
				pokeman.name.toLowerCase().includes(searchTerm.toLowerCase())
			);
		} else {
			filteredPokemon = [...$pokemon];
		}
	}
</script>

<svelte:head>
	<title>Pokedex</title>
</svelte:head>

<h1 class="text-4xl text-center my-8 uppercase">Pokedex</h1>
<input
	class="w-full rounded-md text-lg p-4 border-2 border-gray-200"
	type="text"
	placeholder="Search pokemon"
	bind:value={searchTerm}
/>
<div class="grid gap-4 md:grid-cols-3 grid-cols-1 py-4">
	{#each filteredPokemon as pokeman}
		<PokemanCard {pokeman} />
	{/each}
</div>

<style lang="postcss">
	h1 {
		color: red;
	}
</style>
