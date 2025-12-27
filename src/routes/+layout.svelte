<script lang="ts">
	import 'tailwindcss';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>GameList</title>
</svelte:head>

{@render children()}


<style>
	:global(:root){
		--bg-dark: #181A1B;
		--card-bg: #2C2C2E;
		--text-primary: #E4E4E4;
		--text-secondary: #A0A0A0;
		--text-teriary: #828282;
	}
</style>