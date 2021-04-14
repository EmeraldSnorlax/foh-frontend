<script lang="typescript">
	import { onMount } from "svelte";
	import { each } from "svelte/internal";
	import { get } from "svelte/store";

	import { mdiDotsHorizontal, mdiChevronDoubleUp } from "@mdi/js";
	import * as icon from "./icon";

	import getDirContent from "./getDirContent";
	import { directory } from "./stores";
	import App from "./App.svelte";
	import { domain } from "./index";
	import getDirectoryString from "./getDirString";
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
	<h2 class="md:text-left md:ml-4 my-4 text-center motion-safe:animate-pulse">
		Fetching content...
	</h2>

	<!-- Skeleton Loader -->
	<ul
		class="md:grid md:grid-cols-3 lg:grid-cols-5 md:gap-4 md:m-4 motion-safe:animate-pulse"
	>
		{#each [...Array(7).keys()] as i}
			<li class="h-12">
				<button
					class="border-b-2 h-full flex items-center border-gray-600 md:border-0 md:text-center text-center justify-center md:rounded-lg w-full hover:bg-green-50 bg-gray-200 cursor-wait transition-all hover:shadow-md"
				>
					<svg
						class="fill-current mr-2"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						width="24px"><path d={mdiDotsHorizontal} /></svg
					>
				</button>
			</li>
		{/each}
	</ul>
{:else}
	<!-- Add a go up button if we are not in the root -->
	{#if $directory.length != 0}
		<button
			class="flex items-center p-4 bg-yellow-300 w-full"
			on:click={() => {
				$directory = get(directory).slice(0, get(directory).length - 1);
				update();
			}}
		>
			<svg
				class="fill-current mr-2"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				width="24px"><path d={mdiChevronDoubleUp} /></svg
			>
			<p>Go up</p>
		</button>
	{/if}
	<ul class="md:grid md:grid-cols-3 lg:grid-cols-5 md:gap-4 md:m-4">
		{#each directoryContent as item, i}
			<li>
				<button
					on:click={() => {
						if (item.name.endsWith("/")) {
							directory.set([...$directory, item.name]);
							update();
						} else {
							window.open(
								`${domain}${getDirectoryString([...$directory])}/${item.name}`
							);
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
			</li>
		{/each}
	</ul>
{/if}
