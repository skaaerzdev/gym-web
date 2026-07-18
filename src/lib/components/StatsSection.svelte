<script lang="ts">
  import { browser } from '$app/environment';
  import { onMount } from 'svelte';

  type Stat = {
    target: number;
    suffix?: string;
    label: string;
    format?: string;
  };

  export let stats: Stat[] = [];

  onMount(() => {
    if (!browser) return;
    const counters = document.querySelectorAll('.cnt');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          const target = parseInt(el.dataset.target || '0', 10);
          const isYear = el.dataset.format === 'year';
          const start = isYear ? target - 12 : 0;
          let current = start;
          const duration = 1200;
          const stepTime = 16;
          const steps = duration / stepTime;
          const increment = (target - start) / steps;
          const timer = window.setInterval(() => {
            current += increment;
            if (current >= target) {
              current = target;
              window.clearInterval(timer);
            }
            el.textContent = String(Math.floor(current));
          }, stepTime);
          observer.unobserve(el);
        });
      },
      { threshold: 0.5 },
    );

    counters.forEach((element) => observer.observe(element));
  });
</script>

<section class="section-charcoal" style="padding-top: 90px; padding-bottom: 90px">
  <div class="wrap">
    <div class="stats-grid reveal">
      {#each stats as stat}
        <div class="stat-card">
          <div class="stat-num">
            <span class="cnt" data-target={stat.target} data-format={stat.format ?? ''}>0</span>{stat.suffix ?? ''}
          </div>
          <div class="stat-label">{stat.label}</div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .stats-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1px;
    background: var(--hairline);
    border: 1px solid var(--hairline);
  }

  .stat-card {
    background: var(--void);
    padding: 44px 30px;
    text-align: left;
  }

  .stat-num {
    font-family: var(--ff-display);
    font-size: clamp(42px, 5vw, 64px);
    color: var(--hazard);
    display: flex;
    align-items: baseline;
    gap: 2px;
  }

  .stat-label {
    font-family: var(--ff-mono);
    font-size: 12px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--concrete);
    margin-top: 10px;
  }

  @media (max-width: 900px) {
    .stats-grid {
      grid-template-columns: 1fr 1fr;
    }
  }
</style>
