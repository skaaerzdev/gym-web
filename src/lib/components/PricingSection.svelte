<script lang="ts">
  export let section;
</script>

<section class="section-charcoal" id="membership">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="eyebrow">{section.eyebrow}</div>
      <h2>{section.heading}</h2>
      <p>{section.description}</p>
    </div>

    <div class="price-grid reveal">
      {#each section.plans as plan}
        <div class="price-card {plan.popular ? 'popular' : ''}">
          {#if plan.popular}
            <div class="badge">Most Popular</div>
          {/if}
          <h3>{plan.title}</h3>
          <div class="amount">{plan.amount}<span>{plan.details}</span></div>
          <div class="sub">{plan.subtext}</div>
          <a href={plan.ctaHref} class="btn {plan.popular ? 'btn-primary' : 'btn-ghost'}">{plan.ctaLabel}</a>
        </div>
      {/each}
    </div>

    <p class="corporate-note">
      {section.note}
      <a href={section.noteCta.href} style="color: var(--hazard); text-decoration: underline">{section.noteCta.label}</a>
    </p>
  </div>
</section>

<style>
  .price-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 18px;
  }

  .price-card {
    border: 1px solid var(--hairline);
    background: var(--charcoal);
    padding: 34px 26px;
    display: flex;
    flex-direction: column;
    position: relative;
    transition: border-color 0.25s ease, transform 0.25s ease;
  }

  .price-card:hover {
    transform: translateY(-6px);
    border-color: var(--hazard);
  }

  .price-card.popular {
    border-color: var(--hazard);
    background: var(--charcoal-2);
  }

  .badge {
    position: absolute;
    top: -13px;
    left: 26px;
    background: var(--hazard);
    color: var(--void);
    font-family: var(--ff-mono);
    font-size: 10.5px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    font-weight: 700;
    padding: 5px 10px;
  }

  .price-card h3 {
    font-family: var(--ff-mono);
    font-size: 13px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--concrete);
    margin-bottom: 18px;
    font-weight: 700;
  }

  .amount {
    font-family: var(--ff-display);
    font-size: 44px;
    color: var(--chalk);
    display: flex;
    align-items: baseline;
    gap: 6px;
  }

  .amount span {
    font-family: var(--ff-mono);
    font-size: 13px;
    color: var(--concrete);
    text-transform: none;
    font-weight: 400;
  }

  .sub {
    font-family: var(--ff-mono);
    font-size: 12px;
    color: var(--concrete);
    margin: 14px 0 26px;
  }

  .price-card .btn {
    margin-top: auto;
    width: 100%;
  }

  @media (max-width: 960px) {
    .price-grid {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 560px) {
    .price-grid {
      grid-template-columns: 1fr;
    }
  }

  .corporate-note {
    margin-top: 22px;
    font-size: 14px;
    color: var(--concrete);
    max-width: 640px;
  }
</style>
