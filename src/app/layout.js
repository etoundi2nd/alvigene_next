import "./globals.css";
import { noto_serif_display, inter } from "./fonts";
// import Footer from "./footer";
import Footer from './components/footer';
import Script from 'next/script';
// import "./carousel.js";

const fonts_variables = `${noto_serif_display.className} ${inter.className}`;

export const metadata = {
  title: "Alvigène - Soins de beauté",
  description: "Alvigène. Soins de beauté bio à la bave d'escargot",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link
        rel="shortcut icon"
        type="image/x-icon"
        href="/brand/favicon-0bfd714e5ba4c47e9a82312a8041e652b68b7536ff7ae902b84db05fecaebbbf.png"
      />
      <link
        rel="stylesheet"
        href="carousel.js"
        data-turbo-track="reload"
      />
      <link
        href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css"
        rel="stylesheet"
      />
      <body className={fonts_variables} data-controller="marketing--offset-canvas">
        {children}
        <Footer />
        {/* <Script src="carousel.js" /> */}
      </body>
    </html>
  );
}
