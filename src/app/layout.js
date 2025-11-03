import { Inter } from "next/font/google";
import "./globals.css";
import "../styles/global.scss";
import "../styles/header.scss";
import "../styles/footer.scss";
import "../styles/general_layout.scss";
import "../styles/home.scss";
import "../styles/red-social.scss";
import "../styles/burger-menu.scss";
import "../styles/contact.scss";
import "../styles/form-hrk.scss";
import "../styles/services.scss";
import "../styles/products.scss";
import classNames from "classnames";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Industrial Supply Network | Material commerce for metallic and steel materials",
  description:
    "We offer an extensive range of complete and partial products. Metal goods, steel waste, base materials, processed metals, mineral concentrates and associated derivatives",
  openGraph: {
    title: "Industrial Supply Network",
    description:
      "We offer an extensive range of complete and partial products. Metal goods, steel waste, base materials, processed metals, mineral concentrates and associated derivatives",
    url: "https://hrkglobaltrade.com",
    siteName: "www.hrkglobaltrade",
    keywords: ["ferrous", "steel", "iron", "caustic soda"],
    images: [
      {
        url: "https://hrkglobaltrade.com/img/industrial_metaimage.webp",
        width: 1200,
        height: 630,
        alt: "Industrial Supply Network",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body className={classNames(inter.className, "scrollbar-thin")}>
        {/* <Header /> */}
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
