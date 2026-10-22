<script lang="ts"></script>

<div class="marquee-band">
  <div class="marquee-track" aria-hidden="true">
    {#each [0, 1] as _}
      <span>
        <em>•</em> 12 LIFTING PLATFORMS <em>•</em> CALIBRATED PLATES <em>•</em> OUTDOOR STRONGMAN YARD <em>•</em> 24/7 MEMBER ACCESS <em>•</em> CHALK WELCOME <em>•</em>
      </span>
    {/each}
  </div>
</div>

<style>
  .marquee-band {
    background: var(--charcoal);
    border-bottom: 1px solid var(--hairline);
    overflow: hidden;
    padding: 16px 0;
  }

  .marquee-track {
    display: flex;
    gap: 70px;
    width: max-content;
    animation: scroll-x 26s linear infinite;
    font-family: var(--ff-mono);
    font-size: 13px;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--concrete);
  }

  .marquee-track span {
    display: flex;
    align-items: center;
    gap: 70px;
  }

  .marquee-track em {
    color: var(--hazard);
    font-style: normal;
  }

  @keyframes scroll-x {
    from {
      transform: translateX(0);
    }

    to {
      transform: translateX(-50%);
    }
  }
</style>
