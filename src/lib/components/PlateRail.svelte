<script lang="ts">
  import { browser } from '$app/environment';
  import { onMount, onDestroy } from 'svelte';
  export let sectionIds: string[] = [];
  let fill: HTMLDivElement;
  let activeId = sectionIds[0] ?? '';

  function updateRail() {
    if (!browser) return;
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = Math.min(100, Math.max(0, (scrollTop / docHeight) * 100));
    if (fill) fill.style.height = `${pct}%`;

    let current = sectionIds[0] ?? '';
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el && el.getBoundingClientRect().top < window.innerHeight * 0.6) {
        current = id;
      }
    });
    activeId = current;
  }

  onMount(() => {
    if (!browser) return;
    window.addEventListener('scroll', updateRail, { passive: true });
    updateRail();
  });

  onDestroy(() => {
    if (!browser) return;
    window.removeEventListener('scroll', updateRail);
  });
</script>

<div class="plate-rail" aria-hidden="true">
  <div class="sleeve"><div class="fill" bind:this={fill}></div></div>
  <div class="marks">
    {#each sectionIds as id}
      <div class:active={id === activeId} data-mark={id}>{id.toUpperCase()}</div>
    {/each}
  </div>
</div>

<style>
  .plate-rail {
    position: fixed;
    right: 26px;
    top: 50%;
    transform: translateY(-50%);
    z-index: 60;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0;
  }

  .sleeve {
    width: 6px;
    height: 280px;
    background: var(--charcoal-2);
    border: 1px solid var(--hairline);
    border-radius: 3px;
    position: relative;
    overflow: hidden;
  }

  .fill {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background: var(--hazard);
    height: 0%;
    transition: height 0.1s linear;
  }

  .marks {
    display: flex;
    flex-direction: column;
    gap: 0;
    position: absolute;
    left: 16px;
    top: 0;
    height: 100%;
    justify-content: space-between;
    font-family: var(--ff-mono);
    font-size: 10px;
    color: var(--concrete);
    text-align: left;
  }

  .marks div {
    opacity: 0.5;
    transition: opacity 0.2s, color 0.2s;
  }

  .marks div.active {
    opacity: 1;
    color: var(--hazard);
  }

  @media (max-width: 1000px) {
    .plate-rail {
      display: none;
    }
  }
</style>
