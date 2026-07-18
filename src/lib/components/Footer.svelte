<script lang="ts">
  export let links: {
    explore: Array<{ href: string; label: string }>;
    info: Array<{ href: string; label: string }>;
    follow: Array<{ href: string; label: string }>;
  } = { explore: [], info: [], follow: [] };
  const year = new Date().getFullYear();
</script>

<footer>
  <div class="wrap">
    <div class="foot-grid">
      <div class="foot-brand">
        <div class="brand">
          <div class="brand-mark">
            <img src="/pzbranding.png" alt="PowerZone" height="45" width="auto" />
          </div>
        </div>
        <p>
          Wrexham's No.1 independent gym since 2008. Old school hardcore training, friendly community atmosphere.
        </p>
      </div>

      <div class="foot-col">
        <h4>Explore</h4>
        {#each links.explore as item}
          <a href={item.href}>{item.label}</a>
        {/each}
      </div>

      <div class="foot-col">
        <h4>Info</h4>
        {#each links.info as item}
          <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noopener' : undefined}>{item.label}</a>
        {/each}
      </div>

      <div class="foot-col">
        <h4>Follow</h4>
        {#each links.follow as item}
          <a href={item.href} target="_blank" rel="noopener">{item.label}</a>
        {/each}
      </div>
    </div>

    <div class="foot-bottom">
      <span>© {year} Powerzone Gym, Wrexham.</span>
      <span>Rivulet Rd Unit 4, Wrexham LL13 8DT</span>
    </div>
  </div>
</footer>

<style>
  footer {
    background: var(--void);
    border-top: 1px solid var(--hairline);
    padding: 70px 0 30px;
  }

  .foot-grid {
    display: grid;
    grid-template-columns: 1.4fr 1fr 1fr 1fr;
    gap: 40px;
    padding-bottom: 50px;
    border-bottom: 1px solid var(--hairline);
  }

  .foot-brand p {
    color: var(--concrete);
    font-size: 14.5px;
    margin-top: 16px;
    max-width: 280px;
  }

  .foot-col h4 {
    font-family: var(--ff-mono);
    font-size: 12px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--hazard);
    margin-bottom: 18px;
  }

  .foot-col a {
    display: block;
    color: var(--concrete);
    font-size: 14.5px;
    margin-bottom: 11px;
  }

  .foot-col a:hover {
    color: var(--chalk);
  }

  .foot-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 26px;
    font-family: var(--ff-mono);
    font-size: 11.5px;
    color: var(--concrete);
    flex-wrap: wrap;
    gap: 12px;
  }

  @media (max-width: 860px) {
    .foot-grid {
      grid-template-columns: 1fr 1fr;
    }
  }
</style>
