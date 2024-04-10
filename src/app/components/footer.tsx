import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
return (
  <>
    <footer className="footer">
      <div className="footer-nav py-3">
        <Link className="footer-logo" href="./"> 
          <Image
            width={200}
            height={200}
            alt="logo"
            src="/brand/alvigene-logo-c65d07955c1d97ae1efe6e10b90d98e332760c7ed3747a18771b8fda9cd5685c.svg"
          />
        </Link>
        <div className="container sans-serif">
          <div className="mb-2" >
            <p>
              Alvigène SARL est une société de cosmétiques basée au Cameroun.
              Nous sommes fiers de produire uniquement des produits de soins de
              la peau et de beauté à partir de composants biologiques et
              cultivés localement.
            </p>
            <br />
            <p>
              Tous nos produits sont contrôlés et approuvés par l'ANOR (Agence
              des Normes et de la Qualité du Cameroun).
            </p>
            <br />
            <p>N° RCCM: RC/DLA/2021/B/5884</p>
          </div>
          <div className="mb-3">
            <p><strong>Contactez-nous</strong></p>
            <p>
              <Link className="text-white" href="tel:%2B237650548981" suppressHydrationWarning={true}>
                +237 650 54 89 81
              </Link>
            </p>
            <p>
              <Link className="text-white" href="tel:%2B237698561329" suppressHydrationWarning={true}>
                +237 698 56 13 29
              </Link>
            </p>
            <p>
              <Link
                className="text-white" suppressHydrationWarning={true}
                href="&#109;&#97;&#105;&#108;&#84;&#79;&#58;&#105;&#110;&#102;&#111;&#64;&#97;&#108;&#118;&#105;&#103;&#101;&#110;&#101;&#46;&#99;&#111;&#109;&#63;&#98;&#99;&#99;&#61;&#109;&#101;&#115;&#115;&#105;&#100;&#101;&#117;&#115;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;">
                  info@alvigene.com
              </Link>
            </p>
          </div>
        </div>
        <div className="socials-link">
          <Link 
            className="social-dot" 
            href="https://www.facebook.com/AlvigeneBio/"
          >
            <i className="ri-facebook-fill"></i>
          </Link>
          <Link
            className="social-dot"
            href="https://www.linkedin.com/company/alvigene"
          >
            <i className="ri-linkedin-fill"></i>
          </Link>
          <Link 
            className="social-dot" 
            href="https://twitter.com/alvigene">
            <i className="ri-twitter-fill"></i>
          </Link>
        </div>
      </div>
    </footer>
  </>
)
    
}