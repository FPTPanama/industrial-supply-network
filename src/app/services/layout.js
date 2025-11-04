import { ServiceSchema } from "@/components/SEO/StructuredData";

export const metadata = {
  title: "Services | Industrial Supply Network",
  description:
    "Comprehensive services including risk mitigation, quality assurance, agreement discussions, customer relations, issue resolution, market research, insurance, and transportation strategy for industrial supply operations.",
  keywords: [
    "industrial supply services",
    "risk mitigation",
    "quality assurance",
    "transportation strategy",
    "market research",
    "insurance services",
    "agreement discussions",
    "customer relations",
  ],
  openGraph: {
    title: "Services | Industrial Supply Network",
    description:
      "Comprehensive services including risk mitigation, quality assurance, agreement discussions, customer relations, issue resolution, market research, insurance, and transportation strategy.",
    url: "https://industrialsupply-us.com/services",
    siteName: "Industrial Supply Network",
    images: [
      {
        url: "https://industrialsupply-us.com/img/industrial_metaimage.webp",
        width: 1200,
        height: 630,
        alt: "Industrial Supply Network Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Services | Industrial Supply Network",
    description:
      "Comprehensive services including risk mitigation, quality assurance, agreement discussions, customer relations, issue resolution, market research, insurance, and transportation strategy.",
    images: ["https://industrialsupply-us.com/img/industrial_metaimage.webp"],
  },
};

export default function ServicesLayout({ children }) {
  return (
    <>
      <ServiceSchema />
      {children}
    </>
  );
}

