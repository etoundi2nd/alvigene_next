import Product from './product'
// import getProductList from '../../queries/products/getProductList.js/index.js'
import products from '../../../../public/products/products.json'

export default function ProductList({ productSearch }) {
    const productFetch = productSearch ? productSearch : products

    return (
        <>
            {productFetch.map((product) => (
                <Product key={product.slug} product={product} />
            ))}
        </>
    )
}
