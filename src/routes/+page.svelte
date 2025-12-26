<script lang="ts">
    import { games } from '$lib/data.json';


</script>


<h1>Liste des jeux</h1>

<ul>
{#each games as game}
    <div class="game">
        <h2>{game.name} <span> {game.subname} </span></h2>
        {#if game.description}
            <p> {game.description} </p>
        {/if}
    </div>
{/each}
</ul>

<style>
    :global(body,html){
        margin: 0;
        padding: 0;
        font-family: Arial, sans-serif;
    }

    .game {
        margin-bottom: 2rem;
        margin-left: 1rem;
    }

    h2 {
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
    }

    h2 span {
        font-size: 1rem;
        color: gray;
    }

    p {
        font-size: 1rem;
        line-height: 1.5;
    }
</style>