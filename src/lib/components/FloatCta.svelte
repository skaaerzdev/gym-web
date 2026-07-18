<script lang="ts">
  import { browser } from '$app/environment';
  import { onMount, onDestroy } from 'svelte';
  export let targetId = 'hero';
  let show = false;

  function handleIntersect(entries: IntersectionObserverEntry[]) {
    entries.forEach((entry) => {
      show = !entry.isIntersecting;
    });
  }

  onMount(() => {
    if (!browser) return;
    const target = document.getElementById(targetId);
    if (!target) return;
    const observer = new IntersectionObserver(handleIntersect, { threshold: 0 });
    observer.observe(target);
    onDestroy(() => observer.disconnect());
  });
</script>

<div class="float-cta" class:show={show} aria-hidden={!show}>
  <span>First session free</span>
  <a href="#membership">Join Now</a>
</div>

<style>
  .float-cta {
    position: fixed;
    bottom: 22px;
    left: 50%;
    transform: translate(-50%, 120px);
    z-index: 90;
    display: flex;
    align-items: center;
    gap: 14px;
    background: var(--hazard);
    color: var(--void);
    padding: 12px 12px 12px 22px;
    border-radius: 60px;
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.4);
    transition: transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
  }

  .float-cta.show {
    transform: translate(-50%, 0);
  }

  .float-cta span {
    font-family: var(--ff-mono);
    font-size: 12.5px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    font-weight: 700;
  }

  .float-cta a {
    background: var(--void);
    color: var(--hazard);
    font-family: var(--ff-mono);
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    padding: 11px 20px;
    border-radius: 40px;
  }

  @media (max-width: 640px) {
    .float-cta span {
      display: none;
    }
  }
</style>
