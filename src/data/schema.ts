import { BUSINESS } from '@/data/business';

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Electrician',
    '@id': 'https://ultimategreenelectric.com/#business',
    name: BUSINESS.name,
    description: `Licensed electrician in ${BUSINESS.city}, ${BUSINESS.state} providing residential, commercial, emergency, and EV charger installation services.`,
    url: 'https://ultimategreenelectric.com',
    telephone: BUSINESS.phoneRaw,
    email: BUSINESS.email,
    image: 'https://ultimategreenelectric.com/og-image.jpg',
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS.street,
      addressLocality: BUSINESS.city,
      addressRegion: BUSINESS.state,
      postalCode: BUSINESS.zip,
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '33.5597',
      longitude: '-117.6858',
    },
    areaServed: [
      'Mission Viejo', 'Irvine', 'Dana Point', 'Laguna Hills', 'Laguna Niguel',
      'Lake Forest', 'Aliso Viejo', 'San Juan Capistrano', 'Rancho Santa Margarita', 'Newport Beach',
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '07:00',
        closes: '17:00',
      },
    ],
    hasMap: BUSINESS.mapsLink,
    sameAs: [],
  };
}

export function serviceSchema(serviceName: string, serviceSlug: string, location: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceName,
    serviceType: 'Electrical Services',
    provider: {
      '@type': 'Electrician',
      name: BUSINESS.name,
      telephone: BUSINESS.phoneRaw,
      address: {
        '@type': 'PostalAddress',
        streetAddress: BUSINESS.street,
        addressLocality: BUSINESS.city,
        addressRegion: BUSINESS.state,
        postalCode: BUSINESS.zip,
        addressCountry: 'US',
      },
    },
    areaServed: {
      '@type': 'City',
      name: location,
    },
    url: `https://ultimategreenelectric.com/${serviceSlug}-${MAIN_LOCATION_SLUG}`,
  };
}

export const MAIN_LOCATION_SLUG = 'mission-viejo';

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
      },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `https://ultimategreenelectric.com${item.url}`,
    })),
  };
}
