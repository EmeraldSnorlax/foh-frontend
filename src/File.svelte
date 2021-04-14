<script lang="typescript">
	import type { FileItem } from "./icon";
	import { directory } from "./stores";
	import update from "./updateBrowser";
	export let item: FileItem;
</script>

<button
	on:click={() => {
		if (item.name.endsWith("/")) {
			directory.set([...$directory, item.name]);
			update(() => {});
		}
	}}
	class="border-b-2 flex md:inline items-center p-4 min-h-6  border-gray-600 md:border-0 md:text-center text-center justify-start md:rounded-lg w-full hover:bg-green-50 bg-gray-200 cursor-pointer transition-all hover:shadow-md"
>
	<div class="md:flex md:justify-center md:items-center">
		<svg
			class="fill-current mr-2"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			width="24px"><path d={item.iconPath} /></svg
		>
	</div>

	<p>{item.name}</p>
</button>
