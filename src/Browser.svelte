<script lang="typescript">
	import { onMount } from "svelte";
	import { each } from "svelte/internal";

	import * as icon from './icon';

	import getDirContent from "./getDirContent";
	import { directory } from "./stores";
	let directoryContent: icon.FileItem[] = [];



	function update(): void {
		directoryContent = [];
		getDirContent($directory, (contents: string[]) => {
			contents.forEach((file) => {
				let isFolder = file.endsWith("/");

				directoryContent = [
					...directoryContent,
					{
						name: file,
						isFolder: isFolder,
						iconPath: icon.resolve(file),
					},
				];
			}),
				(err: string) => {
					console.log(err);
				};
		});
	}

	onMount(() => {
		update();
	});
</script>

{#if !directoryContent[0]}
	<h2 class="md:text-left md:ml-4 mt-4 text-center motion-safe:animate-pulse">
		Fetching content...
	</h2>

	<!-- Skeleton Loader -->
	<div class="flex justify-center cursor-wait">
		<ul class="w-full" aria-hidden="true">
			{#each [...Array(8).keys()] as i}
				<li
					class="bg-gray-200 motion-safe:animate-pulse h-8 rounded-lg m-3 md:w-3/4 w-38"
				/>
			{/each}
		</ul>
	</div>
{:else}
	<ul>
		{#each directoryContent as item, i}
			<li
				class="md:text-center text-center flex items-center h-8 rounded-lg p-2 m-4 md:w-3/4 w-38 hover:bg-green-50 cursor-pointer transition-all hover:shadow-md"
			>
			<svg
			class="fill-current mr-2"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			width="24px"
			><path d="{item.iconPath}"/></svg>

				<a>{item.name}</a>
			</li>
		{/each}
	</ul>
{/if}
