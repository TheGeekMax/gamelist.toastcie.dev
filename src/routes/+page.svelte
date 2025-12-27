<script lang="ts">
    import Game from '$lib/components/game.svelte';
    import type { GameData } from '$lib/types'; 
    import data from '$lib/data.json';

    const { games } = data as GameData;
</script>


<h1 class="text-6xl font-bold text-center my-12 text-primary">Liste des jeux</h1>

<ul>
{#each games as game}
    <Game
        {...game}
        description={game.description ?? undefined}
        gameType={game.gameType ?? undefined}
    />
{/each}
</ul>

<style>
    :global(body,html){
        margin: 0;
        padding: 0;
        font-family: Arial, sans-serif;
        background-color: var(--bg-main);
        color: var(--text-main);
    }

    ul {
        list-style: none;
        padding: 0;
    }

</style>