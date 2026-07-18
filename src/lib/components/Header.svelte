<script lang="ts">
  import { navLinks } from '$lib/data/site';
  let menuOpen = false;

  function toggleMenu() {
    menuOpen = !menuOpen;
  }

  function closeMenu() {
    menuOpen = false;
  }
</script>

<header id="siteHeader">
  <nav class="wrap">
    <a href="#top" class="brand">
      <div class="brand-mark">
        <img src="/pzbranding.png" height="50" width="auto" alt="Powerzone Logo" />
      </div>
    </a>

    <div class="nav-links {menuOpen ? 'open' : ''}" id="navLinks">
      {#each navLinks as item}
        <a href={item.href} onclick={closeMenu}>{item.label}</a>
      {/each}
    </div>

    <div class="nav-cta">
      <a href="#location" class="btn btn-ghost" style="padding: 12px 20px">Get Directions</a>
      <a href="#membership" class="btn btn-primary" style="padding: 12px 22px">Join Now</a>
      <button
        class="burger"
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
        onclick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </nav>
</header>

<style>
  header {
    position: sticky;
    top: 0;
    z-index: 100;
    background: rgba(10, 10, 10, 0.85);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid var(--hairline);
    transition: padding 0.25s ease;
    padding: 15px 0;
  }

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 18px 24px;
  }

  .brand {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .nav-links {
    display: flex;
    align-items: center;
    gap: 34px;
    font-family: var(--ff-mono);
    font-size: 12.5px;
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }

  .nav-links a {
    position: relative;
    padding: 4px 0;
    color: var(--chalk);
  }

  .nav-links a::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    height: 2px;
    width: 0;
    background: var(--hazard);
    transition: width 0.25s ease;
  }

  .nav-links a:hover::after {
    width: 100%;
  }

  .nav-cta {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .burger {
    display: none;
    flex-direction: column;
    gap: 5px;
    background: none;
    border: 0;
    cursor: pointer;
    padding: 8px;
  }

  .burger span {
    width: 24px;
    height: 2px;
    background: var(--chalk);
  }

  @media (max-width: 900px) {
    .nav-links {
      position: fixed;
      inset: 0;
      top: 73px;
      background: var(--void);
      flex-direction: column;
      justify-content: flex-start;
      padding: 50px 30px;
      gap: 28px;
      font-size: 16px;
      transform: translateX(100%);
      transition: transform 0.35s ease;
    }

    .nav-links.open {
      transform: translateX(0);
    }

    .nav-cta .btn-ghost {
      display: none;
    }

    .burger {
      display: flex;
    }
  }
</style>
