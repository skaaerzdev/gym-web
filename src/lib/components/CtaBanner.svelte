<script lang="ts">
  export let banner;
</script>

<section class="cta-banner">
  <div
    class="hero-bg"
    style="background-image: url('{banner.image}'); background-size: cover; background-position: center 35%;"
  ></div>
  <div class="wrap cta-inner">
    <div class="eyebrow" style="justify-content: center">{banner.tag}</div>
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

  .hero-bg {
    position: absolute;
    inset: -15% 0;
    height: 130%;
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
