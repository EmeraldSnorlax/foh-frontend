<script lang="typescript">
	import Theme from './Theme.svelte';
	import { directory } from './stores';
	import { mdiFolder } from '@mdi/js';
	import directoryString from "./getDirString";

</script>

<nav
	class="bg-yellow-500 p-4 text-white dark:bg-blue-900 text-2xl font-sans flex justify-items-center justify-between"
>
	<div class="flex justify-items-center ml-4">
		<svg
			class="fill-current mr-2"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			width="24px"
			><path d="{mdiFolder}"/></svg>
		<h2 class="font-sans">{directoryString($directory)}</h2>
	</div>
	<Theme />
</nav>
