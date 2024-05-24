
import Image from "next/image";


async function getData() {
  const res = await fetch("http://127.0.0.1:3000/api/v1/products");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
console.log(res)
  return res;
}

export default async function  Product({ url, title, description, price }) {
  const data = await getData()
  console.log(data)
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
