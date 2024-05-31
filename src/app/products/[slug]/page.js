"use client";
import Image from "next/image";
import { useParams } from "next/navigation";
import getProduct from "../../queries/products/getProduct";

export default async function Page() {
  const params = useParams();
  const product = await getProduct(params.slug);

  return (
    <div className="card card-product">
      <div className="card-img">
        <Image
          width={400}
          height={400}
          alt="logo"
          className="img-fluid"
          src={image_url}
        />
      </div>
      <div className="card-body">
        <div>
          <span className="name" style={{ textdecoration: "none !important" }}>
            <strong>{product.title}</strong>
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
