'use client'

import "./globals.css";
import 'remixicon/fonts/remixicon.css'
import { noto_serif_display, inter } from "./fonts";
import Footer from './components/footer';
import Script from 'next/script';
import React from "react";



const fonts_variables = `${noto_serif_display.className} ${inter.className}`;

const metadata = {
  title: "Alvigène - Soins de beauté",
  description: "Alvigène. Soins de beauté bio à la bave d'escargot",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={fonts_variables} data-controller="marketing--offset-canvas">
        {children}
        <Footer />
        <Script src="carousel.js" />
      </body>
    </html>
  );
  
}