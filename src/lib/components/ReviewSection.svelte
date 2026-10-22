<script lang="ts">
  type Review = {
    avatar: string;
    name: string;
    date: string;
    text: string;
  };

  export let reviews: Review[] = [];
  let track: HTMLDivElement;

  function scrollReviews(dir: number) {
    if (!track) return;
    const card = track.querySelector('.review-card') as HTMLElement;
    const amount = card ? card.getBoundingClientRect().width + 18 : 320;
    track.scrollBy({ left: dir * amount, behavior: 'smooth' });
  }
</script>

<section id="reviews">
  <div class="wrap">
    <div class="reviews-grid reveal">
      <div class="rating-badge">
        <div class="eyebrow" style="margin-bottom:2px">Reviews</div>
        <div class="rb-title">Excellent</div>
        <div class="stars">★★★★★</div>
        <div class="rb-count">Based on 180+ reviews</div>
        <div class="rb-source"><span class="g">G</span> Google Reviews</div>
      </div>
      <div class="reviews-track-wrap">
        <div class="reviews-track" bind:this={track}>
          {#each reviews as review}
            <div class="review-card">
              <div class="review-head">
                <div class="review-who">
                  <div class="review-avatar">{review.avatar}</div>
                  <div>
                    <div class="review-name">{review.name}</div>
                    <div class="review-date">{review.date}</div>
                  </div>
                </div>
                <span class="g">G</span>
              </div>
              <div class="review-stars">★★★★★ <span class="verified">✓ Verified</span></div>
              <p class="review-text">{review.text}</p>
            </div>
          {/each}
        </div>
        <div class="reviews-nav">
          <button aria-label="Previous reviews" on:click={() => scrollReviews(-1)}>←</button>
          <button aria-label="Next reviews" on:click={() => scrollReviews(1)}>→</button>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .reviews-grid {
    display: grid;
    grid-template-columns: 280px 1fr;
    gap: 56px;
    align-items: center;
  }

  .rating-badge {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .rb-title {
    font-family: var(--ff-display);
    font-size: 26px;
    letter-spacing: 0.5px;
  }

  .stars {
    color: var(--hazard);
    font-size: 22px;
    letter-spacing: 3px;
  }

  .rb-count {
    font-family: var(--ff-body);
    font-size: 14.5px;
    color: var(--concrete);
  }

  .rb-source {
    display: flex;
    align-items: center;
    gap: 8px;
    font-family: var(--ff-mono);
    font-size: 13px;
    color: var(--chalk);
    margin-top: 4px;
  }

  .rb-source .g {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: var(--hairline);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: var(--ff-body);
    font-weight: 800;
    font-size: 12px;
    color: var(--hazard);
  }

  .reviews-track-wrap {
    position: relative;
  }

  .reviews-track {
    display: flex;
    gap: 18px;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scrollbar-width: none;
    padding-bottom: 4px;
  }

  .reviews-track::-webkit-scrollbar {
    display: none;
  }

  .review-card {
    scroll-snap-align: start;
    flex: 0 0 min(400px, 86vw);
    background: var(--void);
    border: 1px solid var(--hairline);
    padding: 26px 26px 22px;
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  .review-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .review-who {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .review-avatar {
    width: 38px;
    height: 38px;
    border-radius: 50%;
    background: var(--charcoal-2);
    border: 1px solid var(--hairline);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: var(--ff-display);
    font-size: 15px;
    color: var(--hazard);
  }

  .review-name {
    font-size: 15px;
    font-weight: 700;
  }

  .review-date {
    font-family: var(--ff-mono);
    font-size: 11px;
    color: var(--concrete);
    margin-top: 2px;
  }

  .review-head .g {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: var(--hairline);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    color: var(--hazard);
  }

  .review-stars {
    color: var(--hazard);
    font-size: 15px;
    letter-spacing: 2px;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .review-stars .verified {
    font-family: var(--ff-mono);
    font-size: 10.5px;
    color: var(--concrete);
    letter-spacing: 0.05em;
    display: flex;
    align-items: center;
    gap: 4px;
  }

  .review-text {
    font-size: 14.5px;
    color: var(--chalk);
    opacity: 0.9;
    line-height: 1.55;
  }

  .reviews-nav {
    display: flex;
    gap: 10px;
    margin-top: 22px;
  }

  .reviews-nav button {
    width: 40px;
    height: 40px;
    border: 1px solid var(--hairline);
    background: none;
    color: var(--chalk);
    cursor: pointer;
    font-size: 16px;
    transition: border-color 0.2s ease, color 0.2s ease;
  }

  .reviews-nav button:hover {
    border-color: var(--hazard);
    color: var(--hazard);
  }

  @media (max-width: 860px) {
    .reviews-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
