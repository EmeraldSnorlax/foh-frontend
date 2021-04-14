<script lang="typescript">
	import { directory } from './stores';
	import directoryString from "./dirString";
</script>

<nav
	class="bg-yellow-500 p-4 text-white dark:bg-blue-900 text-2xl font-sans flex justify-items-center"
>
	<div class="flex justify-items-center ml-4">
		<svg
			class="fill-current mr-2"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			width="24px"
			fill="#000000"
			><path d="M0 0h24v24H0V0z" fill="none" /><path
				d="M10 4H2v16h20V6H12l-2-2z"
			/></svg
		>
		<h2 class="font-sans">{directoryString($directory)}</h2>
	</div>
</nav>
