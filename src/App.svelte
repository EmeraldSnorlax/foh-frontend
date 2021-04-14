<script lang="typescript">
	import Nav from "./Nav.svelte";
	import Browser from "./Browser.svelte";
	import * as theme from "./theme";
	import { onMount } from "svelte";

	onMount(() => {
		theme.update()
	});
</script>

<Nav />
<Browser />
