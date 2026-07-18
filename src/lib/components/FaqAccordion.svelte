<script lang="ts">
  export let items: Array<{ question: string; answer: string }> = [];
  let openIndex = 0;

  function toggle(index: number) {
    openIndex = openIndex === index ? -1 : index;
  }
</script>

<section id="faq">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="eyebrow">FAQs</div>
      <h2>Good to know before you turn up.</h2>
    </div>

    <div class="faq-wrap reveal" id="faqList">
      {#each items as item, index}
        <div class="faq-item {openIndex === index ? 'open' : ''}">
          <button class="faq-q" on:click={() => toggle(index)}>
            {item.question}
            <span class="plus">+</span>
          </button>

          <div class="faq-a" style:max-height={openIndex === index ? '240px' : '0'}>
            <p>{item.answer}</p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .faq-wrap {
    max-width: 820px;
  }

  .faq-item {
    border-bottom: 1px solid var(--hairline);
  }

  .faq-q {
    width: 100%;
    text-align: left;
    background: none;
    border: 0;
    color: var(--chalk);
    padding: 26px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    cursor: pointer;
    font-family: var(--ff-body);
    font-size: 18px;
    font-weight: 600;
  }

  .plus {
    font-family: var(--ff-mono);
    font-size: 20px;
    color: var(--hazard);
    transition: transform 0.3s ease;
    flex-shrink: 0;
  }

  .faq-item.open .plus {
    transform: rotate(45deg);
  }

  .faq-a {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.35s ease;
  }

  .faq-a p {
    color: var(--concrete);
    padding-bottom: 24px;
    font-size: 15.5px;
    max-width: 640px;
  }
</style>
