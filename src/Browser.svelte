<script lang="typescript">
	import { onMount } from "svelte";

	import getDirContent from "./getDirContent";
	import { directory } from "./stores";
	onMount(() => {
		// TODO: this
		getDirContent($directory, (contents: string[]) => {
			console.log(contents);
		}, (err: string) => {
			console.log(err);
		});
	});
</script>

