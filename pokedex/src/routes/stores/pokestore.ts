import { writable } from 'svelte/store';
export type PokeAPIObject = {
	name: string;
	url: string;
};
export type Pokeman = {
	name: string;
	id: number;
	image: string;
};
export const pokemon = writable<Pokeman[]>([]);
async function fetchPokemon() {
	const url = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
	const res = await fetch(url);
	const json = await res.json();
	const loadedPokemon = json.results.map((data: PokeAPIObject, index: number) => {
		return {
			name: data.name,
			id: index + 1,
			image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
				index + 1
			}.png`
		};
	});
	pokemon.set(loadedPokemon);
}
fetchPokemon();
