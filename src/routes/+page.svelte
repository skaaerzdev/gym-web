<script lang="ts">
  import { onMount } from 'svelte';
  import Announcement from '$lib/components/Announcement.svelte';
  import Header from '$lib/components/Header.svelte';
  import Hero from '$lib/components/Hero.svelte';
  import MarqueeBand from '$lib/components/MarqueeBand.svelte';
  import StatsSection from '$lib/components/StatsSection.svelte';
  import DifferenceSection from '$lib/components/DifferenceSection.svelte';
  import Gallery from '$lib/components/Gallery.svelte';
  import ReviewSection from '$lib/components/ReviewSection.svelte';
  import PtSection from '$lib/components/PtSection.svelte';
  import PricingSection from '$lib/components/PricingSection.svelte';
  import CtaBanner from '$lib/components/CtaBanner.svelte';
  import FaqAccordion from '$lib/components/FaqAccordion.svelte';
  import LeadForm from '$lib/components/LeadForm.svelte';
  import LocationSection from '$lib/components/LocationSection.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import PlateRail from '$lib/components/PlateRail.svelte';
  import FloatCta from '$lib/components/FloatCta.svelte';
  import Lightbox from '$lib/components/Lightbox.svelte';
  
  import { browser } from '$app/environment';
import {
    announceText,
    heroSlides,
    stats,
    differenceSection,
    galleryItems,
    reviews,
    ptSection,
    pricingSection,
    faqItems,
    locationSection,
    footerLinks,
    ctaBanner,
    pageSections,
  } from '$lib/data/site';

  type GalleryItem = {
    href: string;
    src: string;
    alt: string;
  };

  type LightboxPayload = Pick<GalleryItem, 'href' | 'alt'>;

  let lightboxOpen = false;
  let lightboxSrc = '';
  let lightboxAlt = '';

  function openLightbox(item: LightboxPayload) {
    lightboxSrc = item.href;
    lightboxAlt = item.alt;
    lightboxOpen = true;
  }

  function closeLightbox() {
    lightboxOpen = false;
  }

  onMount(() => {
    if (!browser) return;

    const header = document.getElementById('siteHeader');
    const revealElements = Array.from(document.querySelectorAll('.reveal')) as HTMLElement[];

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );

    revealElements.forEach((el) => revealObserver.observe(el));

    const onScroll = () => {
      if (header) header.style.padding = window.scrollY > 40 ? '10px' : '15px';
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      revealObserver.disconnect();
    };
  });
</script>

<Announcement text={announceText} />
<Header />
<PlateRail sectionIds={pageSections} />

<main id="top">
  <Hero
    slides={heroSlides}
    tag="Wrexham's No.1 Independent Gym · Est. 2008"
    headline="HARDCORE <span class='accent'>TRAINING.</span><br />FRIENDLY COMMUNITY."
    subtext="100+ pieces of strength and cardio equipment, over 50 plate-loaded machines and a dedicated 16-station leg area — built for people who take their training seriously, without losing the welcome."
    primary={{ href: '#membership', label: 'Join Now — From £40/mo' }}
    secondary={{ href: '#difference', label: 'See The Gym ↓' }}
  />

  <MarqueeBand />
  <StatsSection stats={stats} />
  <DifferenceSection section={differenceSection} />
  <Gallery items={galleryItems} on:open={(event) => openLightbox(event.detail)} />
  <ReviewSection reviews={reviews} />
  <PtSection section={ptSection} />
  <PricingSection section={pricingSection} />
  <CtaBanner banner={ctaBanner} />
  <FaqAccordion items={faqItems} />
  <LeadForm />
  <LocationSection location={locationSection} />
</main>

<Footer links={footerLinks} />
<FloatCta targetId="hero" />
<Lightbox src={lightboxSrc} alt={lightboxAlt} open={lightboxOpen} on:close={closeLightbox} />
