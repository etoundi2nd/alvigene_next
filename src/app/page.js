
// 'use client'

// import { usePathname } from 'next/navigation'
// import Link from 'next/link'
import Navbar from './components/navbar'
import Image from 'next/image'
import {products} from './utils/products'
import Product from './components/product'
import Service from './components/service'
import { services } from './utils/services'
// import MyCarouselComponent   from './components/carousel'


 

const navigation = [
  { name: 'Product', href: '#product' },
  { name: 'Testimonies', href: '#testimonie' },
 
]
 
export default function Home() {
  // const pathname = usePathname()
 
  return ( 
    
     <main className="main">
      {/* Begin Navbar component */}
      <Navbar />
      {/* End Navbar component */}

      {/* Begin Jumbottron component  */}
      <div class="index-hero">
        <div class="container index-hero--content">
          <div class="content">
            <h1 class="index-hero--title">
              <span class="text-bg-hero">
                Donnez à votre peau<br />
                <em>des soins</em>
                nécessaires <br />
                & mérités.
              </span>
            </h1>
            <div class="index-hero--description">
              <span class="text-bg-hero">
                Symbole universel du naturel, de la pureté et de l'uniformité du
                tint,
                <strong class="text-dark-green bg-citrus-green px-0-5"
                  >les savons Alvigène doux et hydratants à la bave pure
                  d'escargot</strong
                >
                évoquent des sentiments positifs.
              </span>
            </div>
            <div class="index-hero--cta">
              <a class="btn btn-lg btn-green" href="index.html#products">
                Voir nos produits <i class="ri-arrow-right-s-line"></i>
              </a>
            </div>
          </div>
          <img
            class="index-hero--img"
            src="/products/gels/alvigene-gel-douche-bave-escargot-et-citron-6f5d7461b4b9e7e2bbd4f95438ca995e2d8efd1a9e67db7f83a523cc7e65d23c.png"
          />
        </div>
      </div>
      {/* <section className="bg-[#aac400] bg-blend-multiply">
        <div className="container mx-auto md:grid md:grid-cols-2 pt-8">
          <div className="md:py-20 pt-20">
            <h1 className="text-5xl md:text-6xl md:text-start mx-4 italic">Donnez à votre peau <br />
            des soins nécessaires <br />
            & mérités.</h1>
              <h5 className="text-white md:text-start mx-4 py-10">
                Symbole universel du naturel, de la pureté et de l'uniformité<br /> du tint, 
                <strong className='bg-lime-400 border'>les savons Alvigène doux et hydratants à la bave <br />pure d'escargot </strong>
                évoquent des sentiments positifs.
              </h5>
            <div className="md:py-5 md:py-7 mx-4">
              <a href="#products" className="focus:outline-none text-white bg-green-600 font-medium text-xl px-5 py-2.5 me-2 mb-2">
                  Voir nos produits
              </a>
            </div>
          </div>
          <div className="">
            <Image
              src="/products/gels/alvigene-gel-douche-bave-escargot-et-citron-6f5d7461b4b9e7e2bbd4f95438ca995e2d8efd1a9e67db7f83a523cc7e65d23c.png"
              sizes="100vw"
              style={{
                width: '100%',
                height: 'auto',
              }}
              width={500}
              height={500}
              className=""
              alt="Picture of the author"
            />
          </div>
        </div>
      </section> */}
      {/* End Jumbottron component  */}

      {/* Begin Our service component  */}
      <div class="index-hero-banner">
        <div class="container index-hero-banner--content">
          <div class="index-hero-banner--infos">
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
      </div>
      {/* End Our service component  */}

      {/* Begin Products section */}
      <div id="products" class="index-products">
        <div class="container">
          <div class="index-products--content">
            <h3>
              Collection<br />
              Speciale
            </h3>
            <div class="description">
              Explorez nos savons solide et liquide à la bave pure d'escargot.
            </div>
          </div>
          <div class="products-list pt-2 pb-4">
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
            {/* <div class="card card-product">
              <div class="card-img">
                <img
                  class="img-fluid"
                  src="/products/soaps/alvigene_soap_bar_snail_slime_cover_green-3ca50772919a9b82a4139ed9aacb5c835f23ce0b75034e7e922453a2dc9a13ec.jpg"
                />
              </div>
              <div class="card-body">
                <div>
                  <span class="name" style={{textdecoration: "none !important"}}>
                    <strong
                      >Savons Bio Alvigène à la bave pure d&#39;escargot</strong
                    >
                  </span>
                </div>
                <p class="description mb-1">
                  Notre savon orignal à la bave pure et la coquille
                  d&#39;escargot
                </p>
                <div class="price-cta">
                  <div>
                    <span class="product-price">1 000FCFA</span>
                    <small>TTC</small>
                  </div>
                </div>
              </div>
            </div>
            <div class="card card-product">
              <div class="card-img">
                <img
                  class="img-fluid"
                  src="/products/soaps/alvigene_soap_bar_snail_slime_and_honey_cover-892cd9cf08e8cc135a0dd8487ad6b9b1f7ca113ba94674f1fccd8bb7573ffa83.jpg"
                />
              </div>
              <div class="card-body">
                <div>
                  <span class="name" style={{textdecoration: "none !important"}}>
                    <strong
                      >Savons Bio Alvigène à la bave d&#39;escargot +
                      miel</strong
                    >
                  </span>
                </div>
                <p class="description mb-1">
                  Notre savon orignal à la bave pure et la coquille
                  d&#39;escargot et du miel
                </p>
                <div class="price-cta">
                  <div>
                    <span class="product-price">1 000FCFA</span>
                    <small>TTC</small>
                  </div>
                </div>
              </div>
            </div>
            <div class="card card-product">
              <div class="card-img">
                <img
                  class="img-fluid"
                  src="/products/soaps/alvigene_soap_bar_snail_slime_and_lemon_cover-a79674c331830dd6a89c4134d57c9f2a571d478a637f06128babba9c99b0cac0.jpg"
                />
              </div>
              <div class="card-body">
                <div>
                  <span class="name" style={{textdecoration: "none !important"}}>
                    <strong
                      >Savons Bio Alvigène à la bave d&#39;escargot +
                      citron</strong
                    >
                  </span>
                </div>
                <p class="description mb-1">
                  Notre savon orignal à la bave pure et la coquille
                  d&#39;escargot et du citron
                </p>
                <div class="price-cta">
                  <div>
                    <span class="product-price">1 000FCFA</span>
                    <small>TTC</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="products-list pt-2 pb-4">
            <div class="card card-product">
              <div class="card-img">
                <img
                  class="img-fluid"
                  src="/products/gels/alvigene-shower-gel-snail-cd9e9d462ebe895a1010b8d485dc7ce6db76ea954d2ce6276c307150eee012ca.png"
                />
              </div>
              <div class="card-body">
                <div>
                  <span class="name" style={{textdecoration: "none !important"}}>
                    <strong
                      >Gel douche Alvigène à la bave pure d&#39;escargot</strong
                    >
                  </span>
                </div>
                <p class="description mb-1">
                  Notre gel douche orignal à la bave pure et la coquille
                  d&#39;escargot
                </p>
                <div class="price-cta">
                  <div>
                    <span class="product-price">1 500FCFA</span>
                    <small>TTC</small>
                  </div>
                </div>
              </div>
            </div>
            <div class="card card-product">
              <div class="card-img">
                <img
                  class="img-fluid"
                  src="/products/gels/alvigene-shower-gel-honey-442bd1b1657c90bde0ea21403b4cf3112da0b173f62dae4031724d0d7cd200ff.png"
                />
              </div>
              <div class="card-body">
                <div>
                  <span class="name" style={{textdecoration: "none !important"}}>
                    <strong>
                      Gel douche Alvigène à la bave d&#39;escargot +
                      miel
                    </strong>
                  </span>
                </div>
                <p class="description mb-1">
                  Notre gel douche orignal à la bave pure et la coquille
                  d&#39;escargot et du miel
                </p>
                <div class="price-cta">
                  <div>
                    <span class="product-price">1 500FCFA</span>
                    <small>TTC</small>
                  </div>
                </div>
              </div>
            </div>
            <div class="card card-product">
              <div class="card-img">
                <img
                  class="img-fluid"
                  src="/products/gels/alvigene-shower-gel-lemon-fede4d82a93fa86fd41e96dae4cc719a0fd946fbab731b9acb3ab890c4cf0d91.png"
                />
              </div>
              <div class="card-body">
                <div>
                  <span class="name">
                    <strong
                      >Gel douche Alvigène à la bave d&#39;escargot +
                      citron</strong
                    >
                  </span>
                </div>
                <p class="description mb-1">
                  Notre gel douche orignal à la bave pure et la coquille
                  d&#39;escargot et du citron
                </p>
                <div class="price-cta">
                  <div>
                    <span class="product-price">1 500FCFA</span>
                    <small>TTC</small>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      {/* <div className="container mx-auto p-10">
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
      </div> */}
      {/* End Products section */}

      {/* Begin composition section  */}
      <div class="index-our-qualities py-4">
        <div class="container">
          <div class="index-our-qualities--content">
            <div class="detail">
              <div class="dot bg-green"></div>
              <div class="content">
                Un mélange unique d'ingrédients organiques harmonise et protège
                votre peau contre les maladies, vergetures, rides, cicatrices et
                tâches.
              </div>
            </div>
            <div class="detail">
              <div class="dot bg-citrus-green"></div>
              <div class="content">
                Nous élevons nos escargots dans le respect et l'hygiène
                nécessaires pour obtenir de la salive pure non infecté.
              </div>
            </div>
            <div class="detail">
              <div class="dot bg-red"></div>
              <div class="content">
                Nous sommes fondamentalement contre l'éclaircissage de la peau.
                Nos produits sont faits pour protéger votre peau et votre teint
                naturel.
              </div>
            </div>
            <div class="detail">
              <div class="dot bg-yellow"></div>
              <div class="content">
                Tous nos ingrédients sont produits au Cameroun.
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End composition section  */}


      {/* Begin carrousel section*/}
      <div id="testimonies" class="index-our-customers pb-4">
        <div class="container text-center">
          <h3 class="pt-3 pb-2">Alvigène selon nos clients ✌️</h3>
          <div class="index-our-customers--content">
            <div class="navigation">
              <button
                type="button"
                class="btn"
                data-action="showNext"
                data-change-by="-1"
              >
                <i class="ri-arrow-left-line"></i>
              </button>
            </div>
            <div
              class="main-customer d-none"
              id="main-customer-0"
              data-slide="slide"
            >
              <div class="message py-1">
                Ce savons à changé ma relation avec ma peau et mon teint 😍
              </div>
              <div class="customer-details py-2">
                <div class="mb-1">
                  <img
                    class="avatar"
                    
                    src="/testimonies/rose-7710c7692c3f86f56b2e6d2608930bf47b47a350e7ebedb8b8ed38fa14af7943.png"
                  />
                </div>
                <h5>Rose</h5>
                <em class="text-gray-500">à Douala</em>
              </div>
            </div>
            <div
              class="main-customer d-none"
              id="main-customer-1"
              data-slide="slide"
            >
              <div class="message py-1">
                Excellent produit de lavage, doux sur les mains. L'odeur est
                plus nature et elle me convient moins que l'odeur subtile
                d'amande de l'autre savon noir de la marque. Mais ce détail de
                parfum n'altère en rien la qualité du produit qui est parfaite.
              </div>
              <div class="customer-details py-2">
                <div class="mb-1">
                  <img
                    class="avatar"
                   
                    src="/testimonies/melissa-45acc3babdd4e95f824f5025739d01859969a24d8790a95550780dda616f3320.png"
                  />
                </div>
                <h5>Melissa</h5>
                <em class="text-gray-500">à Libreville</em>
              </div>
            </div>
            <div
              class="main-customer d-none"
              id="main-customer-2"
              data-slide="slide"
            >
              <div class="message py-1">
                Indispensable à ma routine cutanée quotidienne. Super produit,
                j'adore. 👍🏾👍🏾👍🏾👍🏾
              </div>
              <div class="customer-details py-2">
                <div class="mb-1">
                  <img
                    class="avatar"
                    
                    src="/testimonies/ashley-7de04d7156f3e7a5e4fc20da6480f1773776d287780a1877deaf73f95a9c3733.png"
                  />
                </div>
                <h5>Ashley</h5>
                <em class="text-gray-500">à Paris</em>
              </div>
            </div>
            <div
              class="main-customer d-none"
              id="main-customer-3"
              data-slide="slide"
            >
              <div class="message py-1">
                Je l'utilise pour me laver chaque semaine et j'en suis ravie
              </div>
              <div class="customer-details py-2">
                <div class="mb-1">
                  <img
                    class="avatar"
                    
                    src="/testimonies/arielle-9743743ba24c143858aa92c317dd65871aa383f324a790f9595993aa246f351a.png"
                  />
                </div>
                <h5>Arielle</h5>
                <em class="text-gray-500">à Yaounde</em>
              </div>
            </div>
            <div class="navigation">
              <button
                type="button"
                class="btn"
                data-action="showNext"
                data-change-by="1"
              >
                <i class="ri-arrow-right-line"></i>
              </button>
            </div>
          </div>
        </div>
        </div>
     {/* End carrousel section*/}
  
      
      </main> 
    

  );
}