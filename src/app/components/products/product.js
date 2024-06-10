import Image from 'next/image';
import Link from 'next/link';

export default async function Product({ product }) {
	const { title, description, price, image_url, slug, id } = product;
	const product_image = image_url ? image_url : "/products/No-Image-Placeholder.svg";

	return (
    <div className="card card-product">
      <div className="card-img">
        <Image
          width={400}
          height={400}
          alt="logo"
          className="img-fluid"
          src={product_image}
          style={{
            width: "100%",
            height: "auto",
          }}
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
