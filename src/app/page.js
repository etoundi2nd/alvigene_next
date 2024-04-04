
// 'use client'

// import { usePathname } from 'next/navigation'
// import Link from 'next/link'
import Navbar from './components/navbar'
import Image from 'next/image'
import {products} from './utils/products'
import Product from './components/product'
import Service from './components/service'
import { services } from './utils/services'
// import   from '@/app/components/carousel'


 

const navigation = [
  { name: 'Product', href: '#product' },
  { name: 'Testimonies', href: '#testimonie' },
 
]
 
export default function Home() {
  // const pathname = usePathname()
 
  return ( 
    <>
     {/* <main className=""> */}
      {/* Begin Navbar component */}
      <Navbar />
      {/* End Navbar component */}

      {/* Begin Jumbottron component  */}
      <section className="bg-[#aac400] bg-blend-multiply">
        {/* <div className="px-4 mx-auto max-w-screen-xl py-24"> */}
        <div className="container mx-auto md:grid md:grid-cols-2 pt-8">
          <div className="md:py-20 pt-20">
            <h1 className="text-5xl md:text-6xl md:text-start mx-4 italic">Donnez à votre peau <br />
            des soins nécessaires <br />
            & mérités.</h1>
            {/* <div className="py-10 "> */}
              <h5 className="text-white md:text-start mx-4 py-10">
                Symbole universel du naturel, de la pureté et de l'uniformité<br /> du tint, 
                <strong className='bg-lime-400 border'>les savons Alvigène doux et hydratants à la bave <br />pure d'escargot </strong>
                évoquent des sentiments positifs.
              </h5>
            {/* </div> */}
            <div className="md:py-5 md:py-7 mx-4">
              <a href="#products" className="focus:outline-none text-white bg-green-600 font-medium text-xl px-5 py-2.5 me-2 mb-2">
                  Voir nos produits
              </a>
            </div>
          </div>
          <div className="">
            <Image
              src="/products/gels/alvigene-gel-douche-bave-escargot-et-citron-6f5d7461b4b9e7e2bbd4f95438ca995e2d8efd1a9e67db7f83a523cc7e65d23c.png"
              width={700}
              height={700}
              className=""
              alt="Picture of the author"
            />
          </div>
        </div>
      </section>
      {/* End Jumbottron component  */}

      {/* Begin Our service component  */}
      <section className="bg-green-900 p-10">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row start-0 justify-between">
            {
              services.map(s => <Service 
                                  key={s.path_icon} 
                                  path_icon={s.path_icon} 
                                  title={s.title} 
                                  description={s.description} 
                                />
                            )
            }
          </div>
        </div>  
      </section>
      {/* End Our service component  */}

      {/* Begin Products section */}
      <div className="container mx-auto p-10">
        <div className="flex flex-col md:flex-row items-center m-3">
          <h3 className='md:border-r-2 text-4xl font-bold pr-6 border-[#25a049] text-center md:text-start'>Collection <br /> Speciale</h3>
          <h3 className='text-center md:text-start md:pl-6'>Explorez nos savons solide et <br />liquide à la bave pure d'escargot.</h3>
        </div>
        <div id='products' className='gap-3 flex flex-col grid md:grid-cols-3 justify-between'>
          {
            products.map(p => <Product 
                                key={p.title} 
                                url={p.url} 
                                title={p.title} 
                                description={p.description} 
                                price={p.price} 
                              />
                        )         
          }
        </div>
      </div>
      {/* End Products section */}

      {/* Begin composition section  */}
      <section className="bg-[#f8f9fa] p-10">
        <div className="container mx-auto flex flex-col md:flex-row start-0 justify-between">
          <div className='basis-1/4'>
            <svg className="w-12 h-12 text-green" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="M12 2a7 7 0 0 0-7 7 3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h1a1 1 0 0 0 1-1V9a5 5 0 1 1 10 0v7.083A2.919 2.919 0 0 1 14.083 19H14a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h1a2 2 0 0 0 1.732-1h.351a4.917 4.917 0 0 0 4.83-4H19a3 3 0 0 0 3-3v-2a3 3 0 0 0-3-3 7 7 0 0 0-7-7Zm1.45 3.275a4 4 0 0 0-4.352.976 1 1 0 0 0 1.452 1.376 2.001 2.001 0 0 1 2.836-.067 1 1 0 1 0 1.386-1.442 4 4 0 0 0-1.321-.843Z" clip-rule="evenodd"/>
            </svg>
              <span className=''>Un mélange unique d'ingrédients organiques harmonise et protège votre peau contre les maladies, vergetures, rides, cicatrices et tâches.</span>
          </div>
          <div className='basis-1/4'>
            <svg className="w-12 h-12 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="M12 2a7 7 0 0 0-7 7 3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h1a1 1 0 0 0 1-1V9a5 5 0 1 1 10 0v7.083A2.919 2.919 0 0 1 14.083 19H14a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h1a2 2 0 0 0 1.732-1h.351a4.917 4.917 0 0 0 4.83-4H19a3 3 0 0 0 3-3v-2a3 3 0 0 0-3-3 7 7 0 0 0-7-7Zm1.45 3.275a4 4 0 0 0-4.352.976 1 1 0 0 0 1.452 1.376 2.001 2.001 0 0 1 2.836-.067 1 1 0 1 0 1.386-1.442 4 4 0 0 0-1.321-.843Z" clip-rule="evenodd"/>
            </svg>
              <span className=''>Nous élevons nos escargots dans le respect et l'hygiène nécessaires pour obtenir de la salive pure non infecté.</span>
          </div>
          <div className='basis-1/4'>
            <svg className="w-12 h-12 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="M12 2a7 7 0 0 0-7 7 3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h1a1 1 0 0 0 1-1V9a5 5 0 1 1 10 0v7.083A2.919 2.919 0 0 1 14.083 19H14a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h1a2 2 0 0 0 1.732-1h.351a4.917 4.917 0 0 0 4.83-4H19a3 3 0 0 0 3-3v-2a3 3 0 0 0-3-3 7 7 0 0 0-7-7Zm1.45 3.275a4 4 0 0 0-4.352.976 1 1 0 0 0 1.452 1.376 2.001 2.001 0 0 1 2.836-.067 1 1 0 1 0 1.386-1.442 4 4 0 0 0-1.321-.843Z" clip-rule="evenodd"/>
            </svg>
            <div className=''>
              <span className=''>Nous sommes fondamentalement contre l'éclaircissage de la peau. Nos produits sont faits pour protéger votre peau et votre teint naturel.</span>
            </div>
          </div>
          <div className='basis-1/4'>
            <svg className="w-12 h-12 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="M12 2a7 7 0 0 0-7 7 3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h1a1 1 0 0 0 1-1V9a5 5 0 1 1 10 0v7.083A2.919 2.919 0 0 1 14.083 19H14a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h1a2 2 0 0 0 1.732-1h.351a4.917 4.917 0 0 0 4.83-4H19a3 3 0 0 0 3-3v-2a3 3 0 0 0-3-3 7 7 0 0 0-7-7Zm1.45 3.275a4 4 0 0 0-4.352.976 1 1 0 0 0 1.452 1.376 2.001 2.001 0 0 1 2.836-.067 1 1 0 1 0 1.386-1.442 4 4 0 0 0-1.321-.843Z" clip-rule="evenodd"/>
            </svg>
            <div className=''>
              <span className=''>Tous nos ingrédients sont produits au Cameroun.</span>
            </div>
          </div>
        </div>
      </section>
      {/* End composition section  */}

      {/* Begin carrousel section*/}
      <div id="controls-carousel" className="relative w-full" data-carousel="static">
        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
            
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="products/gels/alvigene-shower-gel-honey-442bd1b1657c90bde0ea21403b4cf3112da0b173f62dae4031724d0d7cd200ff.png" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
          </div>
          
          <div className="hidden duration-700 ease-in-out" data-carousel-item="active">
            <img src="products/gels/alvigene-shower-gel-honey-442bd1b1657c90bde0ea21403b4cf3112da0b173f62dae4031724d0d7cd200ff.png" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
          </div>
          
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="products/gels/alvigene-shower-gel-honey-442bd1b1657c90bde0ea21403b4cf3112da0b173f62dae4031724d0d7cd200ff.png" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
          </div>
          
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="products/gels/alvigene-shower-gel-honey-442bd1b1657c90bde0ea21403b4cf3112da0b173f62dae4031724d0d7cd200ff.png" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
          </div>
          
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="products/gels/alvigene-shower-gel-honey-442bd1b1657c90bde0ea21403b4cf3112da0b173f62dae4031724d0d7cd200ff.png" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
          </div>
        </div>
        
        <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
                </svg>
                <span className="sr-only">Previous</span>
            </span>
        </button>
        <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                </svg>
                <span className="sr-only">Next</span>
            </span>
        </button>
      </div>
     {/* End carrousel section*/}

      



      
      {/* </main>  */}
    </>

  );
}