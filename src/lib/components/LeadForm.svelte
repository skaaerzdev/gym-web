<script lang="ts">
  let note = "We'll only use this to contact you about your session.";

  function submitForm(event: Event) {
    event.preventDefault();
    const form = event.currentTarget as HTMLFormElement;
    form.reset();
    note = "Thanks — we'll be in touch shortly.";
  }
</script>

<section class="section-charcoal">
  <div class="wrap">
    <div class="lead-card reveal">
      <div class="lead-copy">
        <div class="eyebrow">Not Ready to Join Yet?</div>
        <h2>Get your free session booked in.</h2>
        <p>
          Leave your details and the team will be in touch - no obligation, no card required.
        </p>
      </div>

      <form class="lead-form" onsubmit={submitForm}>
        <input type="text" placeholder="Full name" required />
        <input type="tel" placeholder="Phone number" required />
        <input type="email" placeholder="Email address" required />
        <button type="submit" class="btn btn-primary">Claim Free Session</button>
        <span class="note">{note}</span>
      </form>
    </div>
  </div>
</section>

<style>
  .lead-card {
    background: var(--charcoal);
    border: 1px solid var(--hairline);
    padding: 52px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;
    align-items: center;
  }

  .lead-copy h2 {
    font-size: clamp(28px, 4vw, 40px);
    margin-bottom: 16px;
  }

  .lead-copy p {
    color: var(--concrete);
    font-size: 16px;
  }

  .lead-form {
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  .lead-form input {
    background: var(--void);
    border: 1px solid var(--hairline);
    color: var(--chalk);
    padding: 15px 16px;
    font-family: var(--ff-body);
    font-size: 15px;
    border-radius: 2px;
  }

  .lead-form input:focus {
    border-color: var(--hazard);
    outline: none;
  }

  .note {
    font-family: var(--ff-mono);
    font-size: 11px;
    color: var(--concrete);
    letter-spacing: 0.03em;
  }

  @media (max-width: 820px) {
    .lead-card {
      grid-template-columns: 1fr;
      padding: 34px;
    }
  }
</style>
