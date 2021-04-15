<script lang="typescript">
	import { onMount } from "svelte";
	import * as theme from "./theme";
	import { view, gridStyle, listStyle } from "./stores";

	import {
		mdiThemeLightDark,
		mdiGrid,
		mdiFormatListBulletedSquare,
	} from "@mdi/js";

	let viewModeIcon = mdiFormatListBulletedSquare;
	function toggleView(): void {
		if ($view.mode === "grid") {
			viewModeIcon = mdiGrid;
			$view.mode = "list";
			$view.style = listStyle
		} else {
			viewModeIcon = mdiFormatListBulletedSquare;
			$view.mode = "grid";
			$view.style = gridStyle;
		}
	}
</script>

<div>
	<button
		aria-label="Switch between grid and list view"
		class="hidden md:inline-block"
		on:click={() => {
			toggleView();
		}}
	>
		<svg
			class="fill-current mr-2"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			width="24px"><path d={viewModeIcon} /></svg
		>
	</button>

	<button
	aria-label="Toggle light and dark theme"
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
</div>
