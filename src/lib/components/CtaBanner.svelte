<script lang="ts">
  import { onMount } from 'svelte';

  export let banner: {
    image: string;
    tag: string;
    heading: string;
    copy: string;
    primary: { href: string; label: string };
    secondary: { href: string; label: string };
  };

  onMount(() => {
    const ctaBg = document.getElementById('ctaBg');

    if (!ctaBg) return;

    const onScroll = () => {
      const ctaRect = ctaBg.parentElement?.getBoundingClientRect();

      if (ctaRect && ctaRect.top < window.innerHeight && ctaRect.bottom > 0) {
        ctaBg.style.transform = `translateY(${ctaRect.top * 0.18}px)`;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener('scroll', onScroll);
  });
</script>

<section class="cta-banner">
  <div
    class="hero-bg"
    id="ctaBg"
    style={`background-image:url('${banner.image}');background-size:cover;background-position:center 35%`}
  ></div>
  <div class="wrap cta-inner">
    <div class="eyebrow" style="justify-content:center">{banner.tag}</div>
    <h2>{banner.heading}</h2>
    <p>{banner.copy}</p>
    <div class="cta-actions">
      <a href={banner.primary.href} class="btn btn-primary">{banner.primary.label}</a>
      <a href={banner.secondary.href} class="btn btn-ghost">{banner.secondary.label}</a>
    </div>
  </div>
</section>

<style>
  .cta-banner {
    position: relative;
    padding: 150px 0;
    overflow: hidden;
    text-align: center;
    border-top: 1px solid var(--hairline);
    border-bottom: 1px solid var(--hairline);
  }

  .cta-banner .hero-bg {
    position: absolute;
    inset: -15% 0;
    height: 130%;
    transition: transform 0.2s ease-out;
  }

  .cta-banner .hero-bg::after {
    content: '';
    position: absolute;
    inset: 0;
    z-index: 1;
    background: linear-gradient(180deg, rgba(10, 10, 10, 0.55) 0%, rgba(10, 10, 10, 0.4) 35%, rgba(10, 10, 10, 0.94) 92%),
      linear-gradient(90deg, rgba(10, 10, 10, 0.88) 0%, rgba(10, 10, 10, 0.2) 55%);
  }

  .cta-inner {
    position: relative;
    z-index: 2;
  }

  .cta-banner h2 {
    font-size: clamp(36px, 6vw, 72px);
    max-width: 820px;
    margin: 0 auto 24px;
  }

  .cta-banner p {
    color: var(--chalk);
    opacity: 0.85;
    font-size: 17px;
    margin-bottom: 38px;
  }

  .cta-actions {
    display: flex;
    gap: 16px;
    justify-content: center;
    flex-wrap: wrap;
  }
</style>