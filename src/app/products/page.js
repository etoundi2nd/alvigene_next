import Navbar from "../components/navbar";
import ProductList from "../components/products/productList";

export default function Product() {
  return (
    <main className="main">
      {/* Begin Navbar component */}
      <Navbar />
      {/* End Navbar component */}

      {/* Begin Product page */}
      <h1 className="text-green text-center">Our products</h1>
      <div className="products-list pt-2 pb-4">
        <ProductList />
      </div>
      {/* End Product page */}
    </main>
  );
}
