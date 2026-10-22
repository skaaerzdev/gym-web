<script lang="ts">
  export let section;
</script>

<section id="pts">
  <div class="wrap">
    <div class="pt-band reveal">
      <div class="pt-media">
        <img src={section.image} alt="Coach working with a member at Basalt" loading="lazy" />
      </div>
      <div class="pt-copy">
        <div class="eyebrow">{section.eyebrow}</div>
        <h2>{section.heading}</h2>
        <p>{section.description}</p>
        <ul class="pt-list">
          {#each section.bulletPoints as item}
            <li>{item}</li>
          {/each}
        </ul>
        <a href={section.cta.href} class="btn btn-primary">{section.cta.label}</a>
      </div>
    </div>
  </div>
</section>

<style>
  .pt-band {
    display: grid;
    grid-template-columns: 0.9fr 1.1fr;
    border: 1px solid var(--hairline);
  }

  .pt-media {
    position: relative;
    min-height: 420px;
  }

  .pt-media img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    inset: 0;
  }

  .pt-copy {
    background: var(--charcoal);
    padding: 64px;
  }

  .pt-copy h2 {
    font-size: clamp(30px, 4vw, 44px);
    margin-bottom: 20px;
  }

  .pt-copy p {
    color: var(--concrete);
    margin-bottom: 28px;
    font-size: 16.5px;
    max-width: 440px;
  }

  .pt-list {
    display: flex;
    flex-direction: column;
    gap: 14px;
    margin-bottom: 34px;
  }

  .pt-list li {
    display: flex;
    gap: 12px;
    align-items: flex-start;
    font-size: 15px;
    color: var(--chalk);
    list-style: none;
  }

  .pt-list li::before {
    content: '';
    width: 8px;
    height: 8px;
    background: var(--hazard);
    margin-top: 6px;
    flex-shrink: 0;
  }

  @media (max-width: 860px) {
    .pt-band {
      grid-template-columns: 1fr;
    }

    .pt-media {
      min-height: 280px;
    }
  }
</style>
