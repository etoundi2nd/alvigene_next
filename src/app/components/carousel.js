// "use client";
// import React from "react";
// import { useEffect } from "react";
// import Image from "next/image";

// export default function Carousel({ url, name, comment, city }) {
//   useEffect(() => {
//     // Your JavaScript code related to carousel initialization or interactions
//     var currentValue = 0;
//     var slideTargets = document.querySelectorAll("[data-slide]");
//     var buttons = document.querySelectorAll('[data-action="showNext"]');

//     function correctValue(value) {
//       if (value >= slideTargets.length) {
//         return (currentValue = 0);
//       } else if (value < 0) {
//         return (currentValue = slideTargets.length - 1);
//       } else {
//         return value;
//       }
//     }

//     function showAny(value) {
//       slideTargets[correctValue(value)].classList.remove("d-none");
//     }

//     function hideAny(value) {
//       slideTargets[correctValue(value)].classList.add("d-none");
//     }

//     function handleTestimonials() {
//       showAny(currentValue);

//       buttons.forEach((btn) => {
//         btn.addEventListener("click", (event) => {
//           hideAny(currentValue);
//           currentValue += parseInt(event.currentTarget.dataset.changeBy);
//           showAny(currentValue);
//         });
//       });
//     }

//     handleTestimonials();

//     // Mobile Menu
//     function handleMobileMenu() {
//       var menuTrigger = document.querySelector(
//         '[data-action="click->marketing--mobile#toggleMenu"]'
//       );
//       var mobileMenu = document.querySelector(
//         '[data-marketing--mobile-target="menu"]'
//       );
//       menuTrigger.addEventListener("click", (event) => {
//         mobileMenu.classList.toggle("d-md-block");
//       });
//     }

//     handleMobileMenu();
//   }, []);

//   return (
//     <div
//       className="main-customer d-none"
//       id="main-customer-0"
//       data-slide="slide"
//     >
//       <div className="message py-1">{comment}</div>
//       <div className="customer-details py-2">
//         <div className="mb-1">
//           <Image
//             width={300}
//             height={300}
//             className="avatar"
//             src={url}
//             alt="rose-image"
//           />
//         </div>
//         <h5>{name}</h5>
//         <em className="text-gray-500">{city}</em>
//       </div>
//     </div>
//   );
// }
