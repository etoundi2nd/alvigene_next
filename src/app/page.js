"use server";
import Navbar from "./components/navbar";
import Image from "next/image";
import { products_soaps, products_gels } from "./utils/products";
import Product from "./components/products/product";
import Service from "./components/service";
import { services } from "./utils/services";
import Carousel from "./components/carousel";
import { testimonies } from "./utils/testimonies";
import Link from "next/link";
import ProductList from "./components/products/productList";

export default async function Home() {
  return (
    <>
      <main className="main">
        {/* Begin Navbar component */}
        <Navbar />
        {/* End Navbar component */}

        {/* Begin Jumbottron component  */}
        <div className="index-hero">
          <div className="container index-hero--content">
            <div className="content">
              <h1 className="index-hero--title">
                <span className="text-bg-hero">
                  Donnez à votre peau <br /> <em>des soins</em> nécessaires{" "}
                  <br />& mérités.
                </span>
              </h1>
              <div className="index-hero--description">
                <span className="text-bg-hero">
                  Symbole universel du naturel, de la pureté et de l'uniformité
                  du tint,
                  <strong className="text-dark-green bg-citrus-green px-0-5">
                    les savons Alvigène doux et hydratants à la bave pure
                    d'escargot
                  </strong>
                  évoquent des sentiments positifs.
                </span>
              </div>
              <div className="index-hero--cta">
                <Link
                  className="btn btn-lg btn-green"
                  href="#products"
                  suppressHydrationWarning={true}
                >
                  Voir nos produits <i className="ri-arrow-right-s-line"></i>
                </Link>
              </div>
            </div>
            <Image
              width={800}
              height={500}
              alt="gels_picture"
              className="index-hero--img"
              src="/products/gels/alvigene-gel-douche-bave-escargot-et-citron-6f5d7461b4b9e7e2bbd4f95438ca995e2d8efd1a9e67db7f83a523cc7e65d23c.png"
            />
          </div>
        </div>
        {/* End Jumbottron component  */}

        {/* Begin Our service component  */}
        <div className="index-hero-banner">
          <div className="container index-hero-banner--content">
            <div className="index-hero-banner--infos">
              {services.map((s) => (
                <Service
                  key={s.path_icon}
                  path_icon={s.path_icon}
                  title={s.title}
                  description={s.description}
                />
              ))}
            </div>
          </div>
        </div>
        {/* End Our service component  */}

        {/* Begin Products section */}
        <div id="products" className="index-products">
          <div className="container">
            <div className="index-products--content">
              <h3>
                Collection
                <br />
                Speciale
              </h3>
              <div className="description">
                Explorez nos savons solide et liquide à la bave pure d'escargot.
              </div>
            </div>
            <div className="products-list pt-2 pb-4">{<ProductList />}</div>
            <div className="products-list pt-2 pb-4">
              {/* Begin Products list type gel */}
            </div>
          </div>
        </div>
        {/* End Products section */}

        {/* Begin composition section  */}
        <div className="index-our-qualities py-4">
          <div className="container">
            <div className="index-our-qualities--content">
              <div className="detail">
                <div className="dot bg-green"></div>
                <div className="content">
                  Un mélange unique d'ingrédients organiques harmonise et
                  protège votre peau contre les maladies, vergetures, rides,
                  cicatrices et tâches.
                </div>
              </div>
              <div className="detail">
                <div className="dot bg-citrus-green"></div>
                <div className="content">
                  Nous élevons nos escargots dans le respect et l'hygiène
                  nécessaires pour obtenir de la salive pure non infecté.
                </div>
              </div>
              <div className="detail">
                <div className="dot bg-red"></div>
                <div className="content">
                  Nous sommes fondamentalement contre l'éclaircissage de la
                  peau. Nos produits sont faits pour protéger votre peau et
                  votre teint naturel.
                </div>
              </div>
              <div className="detail">
                <div className="dot bg-yellow"></div>
                <div className="content">
                  Tous nos ingrédients sont produits au Cameroun.
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End composition section  */}

        {/* Begin carrousel section*/}
        <div id="testimonies" className="index-our-customers pb-4">
          <div className="container text-center">
            <h3 className="pt-3 pb-2">Alvigène selon nos clients ✌️</h3>
            <div className="index-our-customers--content">
              <div className="navigation">
                <button
                  type="button"
                  className="btn"
                  data-action="showNext"
                  data-change-by="-1"
                >
                  <i className="ri-arrow-left-line"></i>
                </button>
              </div>

              {/* {testimonies.map((t) => (
                <Carousel
                  key={t.url}
                  url={t.url}
                  comment={t.comment}
                  name={t.name}
                  city={t.city}
                />
              ))} */}

              <div className="navigation">
                <button
                  type="button"
                  className="btn"
                  data-action="showNext"
                  data-change-by="1"
                >
                  <i className="ri-arrow-right-line"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* End carrousel section*/}
      </main>
    </>
  );
}
