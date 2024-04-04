import "./globals.css";
import { noto_serif_display, inter } from "./fonts";
// import Footer from "./footer";
import Footer from './components/footer'

const fonts_variables = `${noto_serif_display.className} ${inter.className}`;

export const metadata = {
  title: "Alvigène - Soins de beauté",
  description: "Alvigène. Soins de beauté bio à la bave d'escargot",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={fonts_variables}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
