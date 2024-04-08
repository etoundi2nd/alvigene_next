'use client'
import Image from 'next/image'
import Link from 'next/link';
// make the link of actual page actif 
import { usePathname } from 'next/navigation';
import React from 'react';
// import clsx from 'clsx';

const links = [
    {name: 'Products', href: '#product'},
    {name: 'Testimonies', href: '#testimonies'}
];


export default function Navbar(){
  return(
    <header id="js-header" className="header" data-controller="marketing--mobile">
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
          <a className="navbar-logo" href="index.html"
            ><img
              src="/brand/alvigene-logo-c65d07955c1d97ae1efe6e10b90d98e332760c7ed3747a18771b8fda9cd5685c.svg"
          /></a>
          <div className="navbar-items navigation-links">
            <a href="index.html#products">Produits</a>
            <a href="index.html#testimonies">Testimonies</a>
          </div>
        </nav>
      </div>
      <nav className="mobile-menu" data-marketing--mobile-target="menu">
        <a href="index.html#products">Produits</a>
        <a href="index.html#testimonies">Testimonies</a>
      </nav>
    </header>
      
    // <nav className="bg-white fixed justify-between w-full border-b border-gray-200 dark:border-gray-600">
    //   <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    //     <a href="./" className="flex items-center space-x-3 rtl:space-x-reverse">
    //       <Image
    //       src="/brand/alvigene-logo-c65d07955c1d97ae1efe6e10b90d98e332760c7ed3747a18771b8fda9cd5685c.svg"
    //       width={130}
    //       height={200}
    //       alt="Picture of the author"
    //       />
    //     </a>
    //     <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
    //       <span className="sr-only">Open main menu</span>
    //       <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
    //           <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
    //       </svg>
    //     </button>
    //     <div className="hidden w-full md:block md:w-auto" id="navbar-default">
    //       <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
    //           <li>
    //           <a href="#products" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Products</a>
    //           </li>
    //           <li>
    //           <a href="#testimonies" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Testimonies</a>
    //           </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>

  );
}
