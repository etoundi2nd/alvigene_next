'use client'
import Product from './product'
import getProductList from '../../queries/products/getProductList'
import { useEffect, useState } from 'react'
import { useProduct } from '../contexts/ProductContext'

export default function ProductList() {

    const [products, setProducts] = useState([])
    const { researchProduct } = useProduct()
    const productFetch = Object.keys(researchProduct).length !== 0 ? researchProduct : products

    useEffect(() => {
        async function fetchProduct() {
            try {
                const productList = await getProductList()
                setProducts(productList)
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
