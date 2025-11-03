import { Inter } from "next/font/google";
import "./globals.css";
import '../styles/global.scss';
import '../styles/header.scss';
import '../styles/footer.scss';
import '../styles/general_layout.scss';
import '../styles/burger-menu.scss';
import '../styles/red-social.scss';
import TagSide from "@/components/TagSide/TagSide";
import classNames from "classnames";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "HRK Global Trade | Commodity trading for non-ferrous and ferrous products",
  description: "We supply a great variety of finished and semi-finished products. Steel products, ferrous scrap, raw material, refined metals, concentrates and ores and related by-products",
  openGraph: {
    title: 'HRK Global Trade',
    description: "We supply a great variety of finished and semi-finished products. Steel products, ferrous scrap, raw material, refined metals, concentrates and ores and related by-products",
    url: 'https://hrkglobaltrade.com',
    siteName: 'www.hrkglobaltrade',
    keywords: ['ferrous', 'steel', 'iron','caustic soda'],
    images: [
      {
        url: 'https://hrkglobaltrade.com/img/hrk_metaimage.webp', // Aquí deberías poner la URL de tu imagen
        width: 1200,
        height: 630,
        alt: 'HRK Global Trade'
      }
    ],
    locale: 'es_ES',
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico',
  },
  

  
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body className={classNames(inter.className, 'scrollbar-thin')}>
        <TagSide />
      {/* <Header /> */}
        {children}
      {/* <Footer /> */}
      </body>
    </html>
  );
}
