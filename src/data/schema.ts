import { BUSINESS } from '@/data/business';

export const MAIN_LOCATION_SLUG = 'mission-viejo';

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://ultimategreenelectric.com/#organization',
    name: BUSINESS.name,
    url: 'https://ultimategreenelectric.com',
    logo: 'https://ultimategreenelectric.com/logo.png',
    sameAs: [
      'https://www.buildzoom.com/contractor/ultimate-green-electric-inc'
    ]
  };
}

export function webSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://ultimategreenelectric.com/#website',
    url: 'https://ultimategreenelectric.com',
    name: BUSINESS.name,
    publisher: {
      '@id': 'https://ultimategreenelectric.com/#organization'
    }
  };
}

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Electrician',
    '@id': 'https://ultimategreenelectric.com/#business',
    name: BUSINESS.name,
    description: `Licensed electrician (CA Lic #${BUSINESS.license}) in ${BUSINESS.city}, ${BUSINESS.state} providing residential, commercial, emergency, and EV charger installation services.`,
    url: 'https://ultimategreenelectric.com',
    logo: 'https://ultimategreenelectric.com/logo.png',
    image: 'https://ultimategreenelectric.com/og-image.jpg',
    telephone: BUSINESS.phoneRaw,
    email: BUSINESS.email,
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
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday', 'Sunday'],
        description: 'Emergency Services Available 24/7'
      }
    ],
    hasMap: BUSINESS.mapsLink,
    sameAs: [
      'https://www.buildzoom.com/contractor/ultimate-green-electric-inc'
    ],
    identifier: [
      {
        '@type': 'PropertyValue',
        name: 'California Electrical License',
        value: BUSINESS.license
      }
    ]
  };
}

export function serviceSchema(serviceName: string, serviceSlug: string, location: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceName,
    serviceType: 'Electrical Services',
    provider: {
      '@id': 'https://ultimategreenelectric.com/#business'
    },
    areaServed: {
      '@type': 'City',
      name: location,
    },
    url: `https://ultimategreenelectric.com/${serviceSlug}`,
  };
}

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
