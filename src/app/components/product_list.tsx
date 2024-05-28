import { Key } from "react";
import Product from "./product";
import getProduct from "./getProduct";

export default async function ProductList() {
  const dataProduct = await getProduct();
  console.log(dataProduct);

  return (
    <>
      {dataProduct.map(
        (product) => (
          <Product
            key={product.id}
            product ={product}
          />
        )
      )}
    </>
  );
}
