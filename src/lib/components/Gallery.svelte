<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  type GalleryItem = {
    href: string;
    src: string;
    alt: string;
  };

  export let items: GalleryItem[] = [];
  const dispatch = createEventDispatcher<{ open: GalleryItem }>();

  function openLightbox(item: GalleryItem) {
    dispatch('open', item);
  }
</script>

<section class="section-charcoal" id="gallery">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="eyebrow">The Gym</div>
      <h2>Every corner built to lift, press and pull.</h2>
      <p>
        A look inside the floor — free weights, plate-loaded machines and a dedicated leg area, all under one roof in the heart of Wrexham.
      </p>
    </div>

    <div class="gallery-grid reveal" id="galleryGrid">
      {#each items as item}
        <a href={item.href} data-lightbox on:click|preventDefault={() => openLightbox(item)}>
          <img src={item.src} alt={item.alt} loading="lazy" />
        </a>
      {/each}
    </div>

    <div class="gallery-more reveal">
      <a href="#membership" class="btn btn-ghost">Come see it in person — Join Now</a>
    </div>
  </div>
</section>

<style>
  .gallery-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
  }

  .gallery-grid a {
    position: relative;
    overflow: hidden;
    aspect-ratio: 1/1;
    display: block;
    border: 1px solid var(--hairline);
  }

  .gallery-grid img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease, filter 0.5s ease;
    filter: grayscale(35%) contrast(1.05);
  }

  .gallery-grid a:hover img {
    transform: scale(1.09);
    filter: grayscale(0%) contrast(1.05);
  }

  .gallery-grid a::after {
    content: "+";
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: var(--ff-display);
    font-size: 34px;
    color: var(--hazard);
    background: rgba(10, 10, 10, 0);
    opacity: 0;
    transition: opacity 0.3s ease, background 0.3s ease;
  }

  .gallery-grid a:hover::after {
    opacity: 1;
    background: rgba(10, 10, 10, 0.35);
  }

  .gallery-grid a:nth-child(4n + 1) {
    grid-column: span 2;
    grid-row: span 2;
  }

  @media (max-width: 760px) {
    .gallery-grid {
      grid-template-columns: repeat(2, 1fr);
    }

    .gallery-grid a:nth-child(4n + 1) {
      grid-column: span 1;
      grid-row: span 1;
    }
  }

  .gallery-more {
    text-align: center;
    margin-top: 34px;
  }
</style>
