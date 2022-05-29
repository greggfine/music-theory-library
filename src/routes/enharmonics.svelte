<script lang="ts">

	import { getEnharmonicEquivalent  } from '$lib/helpers';
	const chromaticScale = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
	let selectedTonic = 'C';			
	const handleChange = (e: Event) => {
		const target = e.target as HTMLOptionElement;
		selectedTonic = getEnharmonicEquivalent(target.value);
	}
</script>

<svelte:head>
	<title>Enharmonics</title>
</svelte:head>

<section>
	<h2>Find the Enharmonic</h2>
	<select on:change={handleChange}>
		{#each chromaticScale as tonic}
			<option value="{tonic}">{tonic}</option>
		{/each}
	</select>
	<p>{selectedTonic}</p>
</section>
