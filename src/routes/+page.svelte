<script lang="ts">
    import Game from '$lib/components/game.svelte';
    import type { GameData } from '$lib/types'; 
    import data from '$lib/data.json';
    import { Circle, CircleCheck } from '@lucide/svelte';

    let hideDone = $state(false);

    const { games } = data as GameData;
</script>

<div class="bottom-4 right-4 fixed">
    <label class="swap rounded-full border-2 border-primary bg-primary p-2">
        <input type="checkbox" bind:checked={hideDone} />
        <div class="swap-on">
            <CircleCheck color="#fff"/>
        </div>
        <div class="swap-off">
            <Circle color="#fff"/>
        </div>
    </label>
</div>

<h1 class="text-6xl font-bold text-center my-12 text-primary">Liste des jeux</h1>

<ul>
{#each games as game}
    {#if hideDone || !game.done}
    <Game
        {...game}
        description={game.description ?? undefined}
        gameType={game.gameType ?? undefined}
    />
    {/if}
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