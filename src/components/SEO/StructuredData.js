import Script from "next/script";

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Industrial Supply Network",
    url: "https://industrialsupply-us.com",
    logo: "https://industrialsupply-us.com/img/industrial_supply_network_logo.svg",
    description:
      "Material commerce for metallic and steel materials. We offer an extensive range of complete and partial products including metal goods, steel waste, base materials, processed metals, mineral concentrates and associated derivatives.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Miami",
      addressRegion: "FL",
      addressCountry: "US",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Sales",
      email: "sales@industrialsupply-us.com",
    },
    sameAs: [],
  };

  return (
    <Script
      id="organization-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebSiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Industrial Supply Network",
    url: "https://industrialsupply-us.com",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://industrialsupply-us.com/products?search={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <Script
      id="website-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ServiceSchema({ services = [] }) {
  if (services.length === 0) {
    services = [
      "Risk Mitigation",
      "Quality Assurance",
      "Agreement Discussions",
      "Customer Relations",
      "Issue Resolution",
      "Market Research",
      "Insurance",
      "Transportation Strategy",
    ];
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Industrial Supply Services",
    provider: {
      "@type": "Organization",
      name: "Industrial Supply Network",
      url: "https://industrialsupply-us.com",
    },
    areaServed: {
      "@type": "Place",
      name: "United States, Panama, Venezuela",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Industrial Supply Services",
      itemListElement: services.map((service, index) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service,
        },
        position: index + 1,
      })),
    },
  };

  return (
    <Script
      id="service-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ProductSchema({ products = [] }) {
  if (products.length === 0) {
    products = [
      "Construction Materials",
      "Energy Distribution",
      "Aluminum",
      "Steel",
      "Ferrous Materials",
      "Caustic Soda",
      "Glass & Aluminum",
      "Elevators",
    ];
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: products.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Product",
        name: product,
        category: "Industrial Materials",
      },
    })),
  };

  return (
    <Script
      id="product-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

