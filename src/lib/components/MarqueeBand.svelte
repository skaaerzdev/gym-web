<script lang="ts"></script>

<div class="marquee-band">
  <div class="marquee-track" aria-hidden="true">
    <span>
      <em>•</em> 50+ PLATE LOADED MACHINES <em>•</em> 16-STATION LEG AREA <em>•</em> OPEN 5AM–11PM DAILY <em>•</em>
    </span>
    <span>
      <img
        src="https://powerzonegym.org/wp-content/uploads/2024/10/logos-1.png"
        width="auto"
        height="90"
        alt="Partner brands"
      />
      <em>•</em> 50+ PLATE LOADED MACHINES <em>•</em> 16-STATION LEG AREA <em>•</em> OPEN 5AM–11PM DAILY <em>•</em>
    </span>
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
