<script lang="typescript">
	import { onMount } from "svelte";
	import * as theme from "./theme";
	import { mdiThemeLightDark } from "@mdi/js";
</script>

<button
	on:click={() => {
		theme.toggle();
	}}
>
	<svg
		class="fill-current mr-2"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		width="24px"><path d={mdiThemeLightDark} /></svg
	>
</button>
