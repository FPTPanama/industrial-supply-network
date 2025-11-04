import { ProductSchema } from "@/components/SEO/StructuredData";

export const metadata = {
  title: "Products | Industrial Supply Network",
  description:
    "Explore our extensive catalog of industrial products including construction materials, energy distribution systems, aluminum, steel, ferrous materials, caustic soda, glass & aluminum, elevators, and more.",
  keywords: [
    "industrial products",
    "construction materials",
    "steel products",
    "aluminum products",
    "energy distribution",
    "caustic soda",
    "elevators",
    "glass aluminum",
    "ferrous materials",
    "industrial supplies",
  ],
  openGraph: {
    title: "Products | Industrial Supply Network",
    description:
      "Explore our extensive catalog of industrial products including construction materials, energy distribution systems, aluminum, steel, ferrous materials, and more.",
    url: "https://industrialsupply-us.com/products",
    siteName: "Industrial Supply Network",
    images: [
      {
        url: "https://industrialsupply-us.com/img/industrial_metaimage.webp",
        width: 1200,
        height: 630,
        alt: "Industrial Supply Network Products",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Products | Industrial Supply Network",
    description:
      "Explore our extensive catalog of industrial products including construction materials, energy distribution systems, aluminum, steel, ferrous materials, and more.",
    images: ["https://industrialsupply-us.com/img/industrial_metaimage.webp"],
  },
};

export default function ProductsLayout({ children }) {
  return (
    <>
      <ProductSchema />
      {children}
    </>
  );
}

