import Image from "next/image";
import Link from "next/link";

export default async function Product({ product }) {
  const { title, description, price, image_url, slug } = product;

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
            <Link href={`/products/${slug}`}>
              <strong>{title}</strong>
            </Link>
          </span>
        </div>
        <p className="description mb-1">{description}</p>
        <div className="price-cta">
          <div>
            <span className="product-price">{price}FCFA</span>
            <small>TTC</small>
          </div>
        </div>
      </div>
    </div>
  );
}
