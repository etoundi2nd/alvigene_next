import { Key } from "react";
import Product from "./product";
import getProduct from "./getProduct";

export default async function ProductList() {
  const dataProduct = await getProduct();
  console.log(dataProduct);

  return (
    <>
      {dataProduct.length > 1 ? (
        dataProduct.map(
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
        )
      ) : (
        <Product
          key={dataProduct.id}
          url={dataProduct.slug}
          title={dataProduct.title}
          description={dataProduct.description}
          price={dataProduct.price}
        />
      )}
    </>
  );
}
