<script lang="ts">
  export let section;
</script>

<section id="difference">
  <div class="wrap">
    <div class="split">
      <div class="split-media reveal">
        <img src={section.image.src} alt={section.image.alt} loading="lazy" />
        <div class="tag">{section.image.tag}</div>
      </div>
      <div class="split-copy reveal">
        <div class="eyebrow">{section.eyebrow}</div>
        <h2>{section.heading}</h2>
        {#each section.body as paragraph}
          <p>{paragraph}</p>
        {/each}
        <a href={section.button.href} class="btn btn-outline-y">{section.button.label}</a>
        <div class="brands">
          {#each section.brands as brand}
            <span>{brand}</span>
          {/each}
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .split {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 70px;
    align-items: center;
  }

  .split-media {
    position: relative;
    aspect-ratio: 4/5;
    overflow: hidden;
    border: 1px solid var(--hairline);
  }

  .split-media img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.08);
    will-change: transform;
  }

  .tag {
    position: absolute;
    bottom: 20px;
    left: 20px;
    background: var(--hazard);
    color: var(--void);
    font-family: var(--ff-mono);
    font-size: 11px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 8px 14px;
    font-weight: 700;
  }

  .split-copy h2 {
    font-size: clamp(30px, 4vw, 46px);
    margin-bottom: 22px;
  }

  .split-copy p {
    color: var(--concrete);
    font-size: 16.5px;
    margin-bottom: 16px;
  }

  .brands {
    display: flex;
    gap: 26px;
    margin-top: 30px;
    flex-wrap: wrap;
    font-family: var(--ff-mono);
    font-size: 12px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--chalk);
  }

  .brands span {
    border: 1px solid var(--hairline);
    padding: 8px 14px;
  }

  .btn-outline-y {
    border-color: var(--hazard);
    color: var(--hazard);
  }

  @media (max-width: 860px) {
    .split {
      grid-template-columns: 1fr;
    }
  }
</style>
