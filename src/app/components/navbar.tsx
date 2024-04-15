<<<<<<< Updated upstream
"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const links = [
  { name: "Products", href: "#product" },
  { name: "Testimonies", href: "#testimonies" },
];

export default function Navbar() {
  return (
    <header
      id="js-header"
      className="header"
=======
'use client'
import Image from 'next/image'
import Link from 'next/link';
import React from 'react';

export default function Navbar(){
  return(
    <header 
      id="js-header" 
      className="header" 
>>>>>>> Stashed changes
      data-controller="marketing--mobile"
    >
      <div className="container">
        <nav className="navbar" id="js-header-navbar">
          <div
            className="navbar-items mobile-menu-toggle"
            data-action="click->marketing--mobile#toggleMenu"
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <Link
            className="navbar-logo"
            href="./"
            suppressHydrationWarning={true}
          >
            <Image
              width={300}
              height={300}
              alt="logo"
              src="/brand/alvigene-logo-c65d07955c1d97ae1efe6e10b90d98e332760c7ed3747a18771b8fda9cd5685c.svg"
            />
          </Link>
          <div className="navbar-items navigation-links">
            <Link href="./#products">Produits</Link>
            <Link href="./#testimonies">Testimonies</Link>
          </div>
        </nav>
      </div>
      <nav className="mobile-menu" data-marketing--mobile-target="menu">
        <Link href="./#products" suppressHydrationWarning={true}>
          Produits
        </Link>
        <Link href="./#testimonies" suppressHydrationWarning={true}>
          Testimonies
        </Link>
      </nav>
    </header>
  );
}
