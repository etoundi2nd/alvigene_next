import Product from "./product";
import getProductList from "../../queries/products/getProductList";

export default async function ProductList() {
  const productList = await getProductList();
  // console.log(dataProduct);

  return (
    <>
      {productList.map((product) => (
        <Product product={product} />
      ))}
    </>
  );
}
