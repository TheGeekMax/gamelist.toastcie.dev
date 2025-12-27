<script lang="ts">
    import "$lib/css/daisyui.css";
    import type { SingleType } from '$lib/types';
    import type { Component } from 'svelte';
    import { Moon, Check } from '@lucide/svelte';

    
    export let gameType: SingleType;
    
    const iconMap: Record<string, Component> = {
        'moon': Moon,
        'check': Check
    };

    const colorClasses: Record<string, string> = {
        'success': 'badge-success',
        'primary': 'badge-primary',
        'secondary': 'badge-secondary',
        'accent': 'badge-accent',
        'info': 'badge-info',
        'warning': 'badge-warning',
        'error': 'badge-error'
    };

</script>

<div class="badge badge-soft badge-outline {colorClasses[gameType.color] || 'badge-primary'} gap-1">
    <svelte:component this={iconMap[gameType.icon]} size={12} strokeWidth={4} />
    <span class="name">{gameType.name}</span>
</div>

<style>
    .badge {
        display: inline-flex;
        align-items: center;
    }
</style>
