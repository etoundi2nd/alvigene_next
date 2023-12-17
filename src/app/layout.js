import { inter } from "./fonts";
import Footer from "./footer";
import "./globals.css";

const fonts_variables = `${inter.className} font-sans`;

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
