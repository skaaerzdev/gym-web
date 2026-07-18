<script lang="ts">
  export let text = '';
</script>

<div class="announce">{text}</div>

<style>
  .announce {
    background: var(--hazard);
    color: var(--void);
    font-family: var(--ff-mono);
    font-size: 12px;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    font-weight: 700;
    text-align: center;
    padding: 9px 16px;
  }

</style>
