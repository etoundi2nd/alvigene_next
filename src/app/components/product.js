import Image from "next/image";

export default function Product({ url, title, description, price }) {
  return (
    <div className="card card-product">
      <div className="card-img">
        <Image
          width={400}
          height={400}
          alt="logo"
          className="img-fluid"
          src={url}
        />
      </div>
      <div className="card-body">
        <div>
          <span className="name" style={{ textdecoration: "none !important" }}>
            <strong>{title}</strong>
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
