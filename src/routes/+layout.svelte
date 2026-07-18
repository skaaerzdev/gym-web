<script lang="ts">
  import './layout.css';
  import favicon from '$lib/assets/favicon.svg';
  import { siteMeta } from '$lib/data/site';
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
    href="https://fonts.googleapis.com/css2?family=Anton&family=Archivo:wght@400;500;600;700;800;900&family=Space+Mono:wght@400;700&display=swap"
    rel="stylesheet"
  />
  <link rel="icon" href={favicon} />
  <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "ExerciseGym",
      "name": "Powerzone Gym",
      "description": "Old school hardcore gym in Wrexham with a friendly, community atmosphere. Independent gym since 2008.",
      "url": "https://powerzonegym.org/",
      "telephone": "",
      "priceRange": "££",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Rivulet Rd Unit 4",
        "addressLocality": "Wrexham",
        "postalCode": "LL13 8DT",
        "addressCountry": "GB"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
          ],
          "opens": "05:00",
          "closes": "23:00"
        }
      ],
      "sameAs": [
        "https://www.instagram.com/powerzone_gym/?hl=en",
        "https://www.facebook.com/powerzonegymwxm/?locale=en_GB"
      ]
    }
  </script>
  <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Do I need a membership to train at Powerzone?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Pay-as-you-go is available at £8 a session, and your very first session is completely free — no membership required."
          }
        },
        {
          "@type": "Question",
          "name": "Is there parking at Powerzone Gym?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, there is a car park directly behind the gym, plus limited street parking nearby. We recommend members use the car park."
          }
        },
        {
          "@type": "Question",
          "name": "How much does a Powerzone membership cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Standard membership is £45 a month or £325 a year, with discounted rates for students, couples and families."
          }
        },
        {
          "@type": "Question",
          "name": "What are Powerzone's opening hours?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The gym is accessible by fob from 5am to 11pm every day. Staffed hours are 9am–9pm on weekdays and 9am–3pm on weekends."
          }
        },
        {
          "@type": "Question",
          "name": "Does Powerzone sell supplements?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, a full range of protein, creatine, pre-workout and general health supplements is available in person during staffed hours."
          }
        },
        {
          "@type": "Question",
          "name": "Does Powerzone offer personal training?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, our in-house PTs run 1-2-1 sessions and group classes, with rates starting from £20 an hour."
          }
        }
      ]
    }
  </script>
</svelte:head>

<slot />
