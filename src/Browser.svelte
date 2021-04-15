<script lang="typescript">
	import { onMount } from "svelte";
	import { each } from "svelte/internal";
	import { get } from "svelte/store";

	import { mdiDotsHorizontal, mdiChevronDoubleUp } from "@mdi/js";
	import * as icon from "./icon";

	import getDirContent from "./getDirContent";
	import { directory, view } from "./stores";
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
	<h2 class="md:text-left md:ml-4 my-4 text-center motion-safe:animate-pulse dark:text-white">
		Fetching content...
	</h2>

	<!-- Skeleton Loader -->
	<ul
		class="{$view.style.container} motion-safe:animate-pulse dark:text-white"
	>
		{#each [...Array(7).keys()] as i}
			<li class="h-12">
				<button
					class="cursor-wait {$view.style.entry}"
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
			class="flex items-center p-4 bg-yellow-300 dark:bg-blue-600 dark:text-white w-full"
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
	<ul class="{$view.style.container}">
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
					class="{$view.style.entry}"
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
