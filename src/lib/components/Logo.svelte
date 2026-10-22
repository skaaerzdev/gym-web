<script lang="ts">
  // Basalt mark: three hexagonal basalt columns inside a hex frame.
  export let size = 44;
  export let wordmark = true;
</script>

<span class="logo" style="--logo-size: {size}px">
  <svg
    class="mark"
    viewBox="0 0 48 48"
    width={size}
    height={size}
    role="img"
    aria-label="Basalt Strength Club"
  >
    <polygon
      points="24,2.5 42.6,13.25 42.6,34.75 24,45.5 5.4,34.75 5.4,13.25"
      fill="none"
      stroke="currentColor"
      stroke-width="3"
      stroke-linejoin="round"
    />
    <g fill="var(--hazard)">
      <polygon points="12,25 15.5,21.5 19,25 19,36 12,36" />
      <polygon points="20.5,14.5 24,11 27.5,14.5 27.5,36 20.5,36" />
      <polygon points="29,19.5 32.5,16 36,19.5 36,36 29,36" />
    </g>
  </svg>

  {#if wordmark}
    <span class="word">
      <span class="name">Basalt</span>
      <span class="sub">Strength Club · Leith</span>
    </span>
  {/if}
</span>

<style>
  .logo {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    color: var(--chalk);
    line-height: 1;
  }

  .mark {
    flex-shrink: 0;
    display: block;
  }

  .word {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .name {
    font-family: var(--ff-display);
    font-size: calc(var(--logo-size) * 0.62);
    text-transform: uppercase;
    letter-spacing: 0.06em;
  }

  .sub {
    font-family: var(--ff-mono);
    font-size: 9.5px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--concrete);
  }
</style>
