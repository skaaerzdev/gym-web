<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  export let src = '';
  export let alt = '';
  export let open = false;
  const dispatch = createEventDispatcher();

  function close() {
    dispatch('close');
  }

  function onBackdrop(event: MouseEvent) {
    if (event.target === event.currentTarget) close();
  }
</script>

<div class="lightbox {open ? 'open' : ''}" on:click={onBackdrop} aria-hidden={!open}>
  <button class="lightbox-close" type="button" on:click={close}>Close ✕</button>
  <img src={src} alt={alt} />
</div>

<style>
  .lightbox {
    position: fixed;
    inset: 0;
    background: rgba(10, 10, 10, 0.94);
    z-index: 200;
    display: none;
    align-items: center;
    justify-content: center;
    padding: 40px;
  }

  .lightbox.open {
    display: flex;
  }

  .lightbox img {
    max-width: 90vw;
    max-height: 85vh;
    object-fit: contain;
    border: 1px solid var(--hairline);
  }

  .lightbox-close {
    position: absolute;
    top: 26px;
    right: 30px;
    font-family: var(--ff-mono);
    color: var(--chalk);
    background: none;
    border: 1px solid var(--hairline);
    padding: 10px 16px;
    cursor: pointer;
    letter-spacing: 0.1em;
    font-size: 12px;
    text-transform: uppercase;
  }
</style>
