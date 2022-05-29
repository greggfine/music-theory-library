<script lang="ts">
	//@ts-ignore
	import { buildScale, chromaticScale } from '$lib/helpers';
	import scaleMaps from '$lib/scaleMaps.json';
	let scales = Object.keys(scaleMaps);
	let selectedTonic = 'C';
	let selectedType = 'major';

	let selectedScale: string | string[] = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
	const handleInput = (e: Event) => {
		const target = e.target as HTMLFormElement;
		const tonicOptionElement = target[0] as HTMLOptionElement;
		const typeOptionElement = target[1] as HTMLOptionElement;
		let tonic = tonicOptionElement.value;
		let type = typeOptionElement.value;
		selectedScale = buildScale(tonic, type);
		selectedTonic = tonic;
		selectedType = type;
	}
</script>

<svelte:head>
	<title>Scales</title>
</svelte:head>

<section>
	<h2>Get the Scale</h2>
		<form on:submit|preventDefault={handleInput}>
			<select class="px-4 py-3 rounded-full">
				{#each chromaticScale as tonic, idx (idx)}
					<option value={tonic} name="tonic">{tonic}</option>
				{/each}
			</select>
			<select class="form-select px-4 py-3 rounded-full">
				{#each scales as scale, idx (idx)}
					<option value={scale} name="type">{scale}</option>
				{/each}
			</select>
			<input type="submit" value="submit">
		</form>
		<div class="scale-result"><span class="selected-scale">{selectedTonic} {selectedType}:</span> {selectedScale}</div>
</section>

<style>
	.scale-result {
		margin: 16px 0;
	}
	.selected-scale {
		font-weight: 700;
	}
	input[type="submit"]:hover {
		cursor: pointer;
	}
</style>