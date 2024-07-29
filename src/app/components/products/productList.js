'use client'
import Product from './product'
import getProductList from '../../queries/products/getProductList'
import { useEffect, useState } from 'react'

export default function ProductList({ productSearch }) {
    const [productList, setProductList] = useState([])
    const productFetch = productSearch ? productSearch : productList

    useEffect(() => {
        async function fetchProduct() {
            try {
                const product = await getProductList()
                setProductList(product)
            } catch (error) {
                console.error('Error fetching search results:', error)
            }
        }

        fetchProduct()
    }, [])

    return (
        <>
            {productFetch.map((product) => (
                <Product key={product.slug} product={product} />
            ))}
        </>
    )
}
