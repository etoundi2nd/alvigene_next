var currentValue = 0;
var slideTargets = 0

if (typeof document !== 'undefined'){
  var slideTargets = document.querySelectorAll("[data-slide]");
  var buttons = document.querySelectorAll('[data-action="showNext"]');

  
}

console.log(slideTargets)
function correctValue(value) {
  if (value >= slideTargets.length) {
    return (currentValue = 0);
  } else if (value < 0) {
    return (currentValue = slideTargets.length - 1);
  } else {
    return value;
  }
}

function showAny(value) {
  slideTargets[correctValue(value)].classList.remove("d-none");
}

function hideAny(value) {
  slideTargets[correctValue(value)].classList.add("d-none");
}

function handleTestimonials() {
  showAny(currentValue);

  buttons.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      hideAny(currentValue);
      currentValue += parseInt(event.currentTarget.dataset.changeBy);
      showAny(currentValue);
    });
  });
}

handleTestimonials();

// Mobile Menu

function handleMobileMenu() {
  var menuTrigger = document.querySelector(
    '[data-action="click->marketing--mobile#toggleMenu"]'
  );
  var mobileMenu = document.querySelector(
    '[data-marketing--mobile-target="menu"]'
  );
  menuTrigger.addEventListener("click", (event) => {
    mobileMenu.classList.toggle("d-md-block");
  });
}

handleMobileMenu();


















// // async function process() {
// //     try {
// //         const name = await data;
// //         const userDetail = await getUserDetails(name);
// //         console.log(userDetail)
// //         console.log('Test')
// //     } catch (error) {
// //         console.log(error.message)
// //     }finally{
// //         console.log('From Finally')
// //     }
    
// // }

// // process();
// // console.log('Last')
// <section>
//       <div className='relative'>
//         <ul id="slide">
//           <li className='h-[50vh] relative'>
//             <img class="h-full object-cover" src='products/gels/alvigene-shower-gel-honey-442bd1b1657c90bde0ea21403b4cf3112da0b173f62dae4031724d0d7cd200ff.png'></img>
//             <div className='absolute top-0 left-0 h-full w-full flex'>
//               <h2 className='text-4xl font-bold text-white my-auto w-full'>1</h2>
//             </div>
//           </li>
//           <li className='h-[50vh] relative hidden'>
//             <img class="h-full object-cover" src='products/gels/alvigene-shower-gel-honey-442bd1b1657c90bde0ea21403b4cf3112da0b173f62dae4031724d0d7cd200ff.png'></img>
//             <div className='absolute top-0 left-0 h-full w-full flex'>
//               <h2 className='text-4xl font-bold text-white my-auto w-full'>2</h2>
//             </div>
//           </li>
//           <li className='h-[50vh] relative hidden'>
//             <img class="h-full object-cover" src='products/gels/alvigene-shower-gel-honey-442bd1b1657c90bde0ea21403b4cf3112da0b173f62dae4031724d0d7cd200ff.png'></img>
//             <div className='absolute top-0 left-0 h-full w-full flex'>
//               <h2 className='text-4xl font-bold text-white my-auto w-full'>3</h2>
//             </div>
//           </li> 
//         </ul>
//         <button onClick="prev()" className='bg-white p-3 rounded-full bg-opacity-80 shadow-lg'>
//         <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
//   <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12l4-4m-4 4 4 4"/>
// </svg>

//         </button>
//         <button onClick="next()" className='bg-white p-3 rounded-full bg-opacity-80 shadow-lg'>
//         <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
//   <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4"/>
// </svg>

//         </button>
//       </div>
// </section>



// currentSlideID = 1

// sliderElement = document.getElementById('slider')
// totalSlides = sliderElement.childElementCount;

// function next() {
//     if (currentSlideID < totalSlides) {
//         currentSlideID++;
//         showSlide();
//     }
// }

// function prev() {
//     if (currentSlideID > 1) {
//         currentSlideID--
//         showSlide()
//     }
// }

// function showSlide() {
//     slides = document.getElementById('slider').getElementsByTagName('li')
//     for (let index = 0; index < totalSlides; index++) {
//         const element = slides[index];
//         if (currentSlideID===index+1) {
//             element.classList.remove('hidden')
//         }else{
//             element.classList.add('hidden')
//         }
//     }
// }