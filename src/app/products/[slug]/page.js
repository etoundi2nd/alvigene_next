"use client";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import getProduct from "../../queries/products/getProduct";
import { usePathname } from "next/navigation";

export default async function Page() {
  const params = useParams();
  const pathname = usePathname();

  const product = await getProduct(params.slug);

  return (
    <div className="card card-product">
      <div className="card-img">
        {/* <Image
          width={400}
          height={400}
          alt="logo"
          className="img-fluid"
          src={image_url}
        /> */}
      </div>
      <div className="card-body">
        <div>
          <span className="name" style={{ textdecoration: "none !important" }}>
            {/* <Link href={`/products/${product.slug}`}> */}
              <strong>{product.title}</strong>
            {/* </Link> */}
          </span>
        </div>
        <p className="description mb-1">{product.description}</p>
        <div className="price-cta">
          <div>
            <span className="product-price">{product.price}FCFA</span>
            <small>TTC</small>
          </div>
        </div>
      </div>
    </div>
  );
}
