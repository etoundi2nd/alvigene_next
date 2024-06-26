import { Key } from 'react'
import Product from './product'
import getProductList from '../../queries/products/getProductList'

export default async function ProductList() {
    const productList = await getProductList()

    return (
        <>
            {productList.map((product) => (
                <Product key={product.slug} product={product} />
            ))}
        </>
    )
}
