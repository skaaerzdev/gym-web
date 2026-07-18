<script lang="ts">
  import { browser } from '$app/environment';
  import { onDestroy, onMount } from 'svelte';

  type HeroSlide = {
    src: string;
    alt: string;
  };

  export let slides: HeroSlide[] = [];
  export let tag = '';
  export let headline = '';
  export let subtext = '';
  export let primary = { href: '#membership', label: 'Join Now — From £40/mo' };
  export let secondary = { href: '#difference', label: 'See The Gym ↓' };

  let currentSlide = 0;
  let timer: number;
  let prefersReducedMotion = false;
  let heroBg: HTMLElement;

  function goToSlide(index: number) {
    currentSlide = index;
  }

  function nextSlide() {
    goToSlide((currentSlide + 1) % slides.length);
  }

  function startTimer() {
    if (!browser) return;
    window.clearInterval(timer);
    timer = window.setInterval(nextSlide, 4800);
  }

  function onScroll() {
    if (!heroBg || !browser) return;
    heroBg.style.transform = `translateY(${window.scrollY * 0.35}px)`;
  }

  onMount(() => {
    if (!browser) return;
    prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!prefersReducedMotion) startTimer();
    window.addEventListener('scroll', onScroll, { passive: true });
  });

  onDestroy(() => {
    if (!browser) return;
    window.clearInterval(timer);
    window.removeEventListener('scroll', onScroll);
  });
</script>

<section class="hero" id="hero">
  <div class="hero-bg" bind:this={heroBg} id="heroBg">
    {#each slides as slide, index}
      <div
        class="hero-slide {index === currentSlide ? 'active' : ''}"
        style="background-image: url('{slide.src}');"
        aria-hidden={index !== currentSlide}
      ></div>
    {/each}
  </div>

  <div class="hero-dots" role="tablist" aria-label="Gym photo slideshow" id="heroDots">
    {#each slides as _, index}
      <button
        class={index === currentSlide ? 'active' : ''}
        aria-label={`Show slide ${index + 1}`}
        data-i={index}
        on:click={() => {
          goToSlide(index);
          if (!prefersReducedMotion) startTimer();
        }}
      ></button>
    {/each}
  </div>

  <div class="hero-count">
    <b>{String(currentSlide + 1).padStart(2, '0')}</b> / {String(slides.length).padStart(2, '0')}
  </div>

  <div class="hero-inner">
    <div class="wrap">
      <div class="hero-tag">{tag}</div>
      <h1>{@html headline}</h1>
      <p class="hero-sub">{subtext}</p>
      <div class="hero-actions">
        <a href={primary.href} class="btn btn-primary">{primary.label}</a>
        <a href={secondary.href} class="btn btn-ghost">{secondary.label}</a>
      </div>
    </div>
  </div>

  <div class="hero-scroll">
    <span>Scroll</span>
    <span class="line"></span>
  </div>
</section>

<style>
  .hero {
    position: relative;
    min-height: 100svh;
    display: flex;
    align-items: flex-end;
    overflow: hidden;
    border-bottom: 1px solid var(--hairline);
    padding: 0;
  }

  .hero-bg {
    position: absolute;
    inset: -8% 0 0 0;
    height: 116%;
    will-change: transform;
  }

  .hero-slide {
    position: absolute;
    inset: 0;
    background-size: cover;
    background-position: center 30%;
    opacity: 0;
    transition: opacity 1.4s cubic-bezier(0.2, 0.6, 0.2, 1);
  }

  .hero-slide.active {
    opacity: 1;
  }

  .hero-bg::after {
    content: '';
    position: absolute;
    inset: 0;
    z-index: 1;
    background: linear-gradient(180deg, rgba(10, 10, 10, 0.55) 0%, rgba(10, 10, 10, 0.4) 35%, rgba(10, 10, 10, 0.94) 92%), linear-gradient(90deg, rgba(10, 10, 10, 0.88) 0%, rgba(10, 10, 10, 0.2) 55%);
  }

  .hero-dots {
    position: absolute;
    z-index: 3;
    left: 24px;
    bottom: 120px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .hero-dots button {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: rgba(238, 242, 249, 0.3);
    border: 0;
    cursor: pointer;
    padding: 0;
    transition: background 0.25s ease, transform 0.25s ease;
  }

  .hero-dots button.active {
    background: var(--hazard);
    transform: scale(1.3);
  }

  .hero-count {
    position: absolute;
    z-index: 3;
    left: 26px;
    bottom: 64px;
    font-family: var(--ff-mono);
    font-size: 11px;
    letter-spacing: 0.1em;
    color: var(--concrete);
  }

  .hero-count b {
    color: var(--chalk);
  }

  @media (max-width: 640px) {
    .hero-dots,
    .hero-count {
      display: none;
    }
  }

  .hero-inner {
    position: relative;
    z-index: 2;
    width: 100%;
    padding: 50px 24px 200px;
  }

  .hero-inner .wrap {
    padding: 0;
  }

  .hero-tag {
    font-family: var(--ff-mono);
    color: var(--hazard);
    font-size: 13px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    margin-bottom: 18px;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .hero-tag::before {
    content: '';
    width: 34px;
    height: 2px;
    background: var(--hazard);
  }

  .hero h1 {
    font-size: clamp(48px, 9vw, 110px);
    max-width: 900px;
  }

  .hero-sub {
    font-family: var(--ff-body);
    font-size: clamp(16px, 2vw, 19px);
    color: var(--concrete);
    max-width: 520px;
    margin: 26px 0 38px;
    font-weight: 400;
  }

  .hero-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    align-items: center;
  }

  .hero-scroll {
    position: absolute;
    bottom: 28px;
    right: 24px;
    z-index: 2;
    font-family: var(--ff-mono);
    font-size: 11px;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--concrete);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  .hero-scroll .line {
    width: 1px;
    height: 46px;
    background: linear-gradient(var(--hazard), transparent);
    animation: scrolldrop 1.8s ease-in-out infinite;
  }

  @keyframes scrolldrop {
    0% {
      transform: scaleY(0);
      transform-origin: top;
    }

    50% {
      transform: scaleY(1);
      transform-origin: top;
    }

    50.01% {
      transform-origin: bottom;
    }

    100% {
      transform: scaleY(0);
      transform-origin: bottom;
    }
  }
</style>
