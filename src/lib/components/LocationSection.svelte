<script lang="ts">
  type LocationInfo = {
    heading: string;
    mapUrl: string;
    iframeSrc: string;
    address: string;
    hours: string;
    staffed: string;
    instagram: string;
    facebook: string;
  };

  export let location: LocationInfo;
</script>

<section id="location">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="eyebrow">Find Us</div>
      <h2>{location.heading}</h2>
    </div>

    <div class="loc-grid reveal">
      <a
        class="loc-card"
        href={location.mapUrl}
        target="_blank"
        rel="noopener"
        aria-label="Open Powerzone Gym location map"
      >
        <div class="loc-map">
          <iframe
            title="Powerzone Gym location map"
            src={location.iframeSrc}
            width="600"
            height="450"
            style="border: 0"
            allowfullscreen
            loading="lazy"
            referrerpolicy="strict-origin-when-cross-origin"
          ></iframe>
        </div>
      </a>

      <div>
        <div class="info-list">
          <div class="info-row">
            <div class="k">Address</div>
            <div class="v">{location.address}</div>
          </div>
          <div class="info-row">
            <div class="k">Hours</div>
            <div class="v">{location.hours}</div>
          </div>
          <div class="info-row">
            <div class="k">Staffed</div>
            <div class="v">{location.staffed}</div>
          </div>
        </div>

        <div class="social-row">
          <a href={location.instagram} target="_blank" rel="noopener">Instagram</a>
          <a href={location.facebook} target="_blank" rel="noopener">Facebook</a>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .loc-grid {
    display: grid;
    grid-template-columns: 1.1fr 0.9fr;
    gap: 60px;
  }

  .loc-card {
    border: 1px solid var(--hairline);
    background: var(--charcoal);
    padding: 14px;
  }

  .loc-map {
    aspect-ratio: 16/10;
    background: repeating-linear-gradient(45deg, var(--charcoal-2) 0 2px, transparent 2px 14px), var(--void);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    border: 1px solid var(--hairline);
  }

  .info-list {
    display: flex;
    flex-direction: column;
    gap: 26px;
    margin-top: 8px;
  }

  .info-row {
    display: flex;
    gap: 18px;
    align-items: flex-start;
    border-bottom: 1px solid var(--hairline);
    padding-bottom: 22px;
  }

  .info-row .k {
    font-family: var(--ff-mono);
    font-size: 11.5px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--hazard);
    width: 110px;
    flex-shrink: 0;
  }

  .info-row .v {
    font-size: 16px;
    color: var(--chalk);
  }

  .social-row {
    display: flex;
    gap: 14px;
    margin-top: 8px;
  }

  .social-row a {
    border: 1px solid var(--hairline);
    padding: 10px 18px;
    font-family: var(--ff-mono);
    font-size: 12px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    transition: border-color 0.2s ease, color 0.2s ease;
  }

  .social-row a:hover {
    border-color: var(--hazard);
    color: var(--hazard);
  }

  @media (max-width: 900px) {
    .loc-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
