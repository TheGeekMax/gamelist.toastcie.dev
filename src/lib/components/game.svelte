<script lang="ts">
    export let name: string;
    export let subname: string;
    export let description: string | undefined;
    export let gameType: number | undefined;
    export let datasuplement: string | undefined;

    import Tag from '$lib/components/singleType.svelte';

    import { gameType as gt } from '$lib/data.json';
</script>



<div class="card w-96 bg-base-100 card-sm shadow-sm mx-auto mb-8 ">
    <div class="card-body">
        <h2>{name} <span> {subname} </span></h2>
        {#if description}
            <p> {description} </p>
        {/if}
        {#if gameType !== undefined}
            <Tag gameType={gt[gameType]} />
        {:else}
            <Tag gameType={gt[0]} />
        {/if}
        {#if datasuplement}
            <p class="mt-4 whitespace-pre-line">{datasuplement}</p>
        {/if}
    </div>
</div>

<style>

    h2 {
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
        color: var(--text-primary);
    }

    h2 span {
        font-size: 1rem;
        color: var(--text-tertiary);
    }

    p {
        font-size: 1rem;
        line-height: 1.5;
        color: var(--text-secondary);
    }
</style>