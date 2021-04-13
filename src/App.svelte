<script lang="typescript">
	import { onMount } from "svelte";

	let count: number = 0;
	onMount(() => {
		const interval = setInterval(() => count++, 1000);
		return () => {
			clearInterval(interval);
		};
	});
</script>

<div class="text-center">
	<header class="flex flex-col items-center justify-center">
		<img src="/logo.svg" alt="logo" class="pointer-events-none" />
		<p>Edit <code>src/App.svelte</code> and save to reload.</p>
		<p>Page has been open for <code>{count}</code> seconds.</p>
	</header>
</div>
