<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<div class="flex flex-col items-center">
	<h1 class="text-4xl text-center my-8 uppercase">{data.pokeman.name}</h1>
	<p>
		Type: <strong>{data.pokeman.types[0].type.name}</strong> | Height:
		<strong>{data.pokeman.height}</strong>
		| Weight: <strong>{data.pokeman.weight}</strong>
	</p>
	<img
		class="card-image h-40 w-40"
		src={data.pokeman.sprites['front_default']}
		alt={data.pokeman.name}
	/>
</div>
