import { Key } from "react";
import Product from "./product";
import getProduct from "./getProduct";

export default async function ProductList() {
  const dataProduct = await getProduct();
  console.log(dataProduct);

  return (
    <>
      {dataProduct.map(
        (product: {
          id: Key;
          slug: any;
          title: any;
          description: any;
          price: any;
        }) => (
          <Product
            key={product.id}
            url={product.slug}
            title={product.title}
            description={product.description}
            price={product.price}
          />
        )
      )}
    </>
  );
}
