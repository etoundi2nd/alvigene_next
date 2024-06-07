import Navbar from "../components/navbar";
import ProductList from "../components/products/productList";

export default function Product() {
  return (
    <main className="main">
      <Navbar />

      <div className="container text-center">
        <h3 className="pt-3 pb-2">Nos produits</h3>
        <div className="products-list pt-2 pb-4">
          <ProductList />
        </div>
      </div>
    </main>
  );
}
