<script lang="ts">
  import './layout.css';
  import favicon from '$lib/assets/favicon.svg';
  import { siteMeta, faqItems } from '$lib/data/site';

  const gymSchema = {
    '@context': 'https://schema.org',
    '@type': 'ExerciseGym',
    name: 'Basalt Strength Club',
    description:
      'Independent strength gym in Leith, Edinburgh with lifting platforms, 24/7 member access and in-house coaching. Est. 2016.',
    url: siteMeta.canonical,
    priceRange: '££',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Unit 3, Kilnmoss Works',
      addressLocality: 'Edinburgh',
      postalCode: 'EH6 7QX',
      addressCountry: 'GB',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '00:00',
        closes: '23:59',
      },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };

  const jsonLd = (data: object) =>
    `<script type="application/ld+json">${JSON.stringify(data)}</` + 'script>';
</script>

<svelte:head>
  <title>{siteMeta.title}</title>
  <meta name="description" content={siteMeta.description} />
  <link rel="canonical" href={siteMeta.canonical} />
  <meta property="og:type" content="website" />
  <meta property="og:title" content={siteMeta.title} />
  <meta property="og:description" content={siteMeta.description} />
  <meta property="og:url" content={siteMeta.canonical} />
  <meta name="theme-color" content={siteMeta.themeColor} />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
  <link
    href="https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@800&family=Archivo:wght@400;500;600;700;800;900&family=Space+Mono:wght@400;700&display=swap"
    rel="stylesheet"
  />
  <link rel="icon" href={favicon} />
  {@html jsonLd(gymSchema)}
  {@html jsonLd(faqSchema)}
</svelte:head>

<slot />
