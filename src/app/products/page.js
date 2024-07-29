'use client'

import { useState } from 'react'
import ProductList from '../components/products/productList'
import SearchProduct from '../components/searchProduct'

export default function Product() {
    const [productSearch, setProductSearch] = useState('')

    return (
        <main className="main">
            <SearchProduct setProductSearch={setProductSearch} />
            <div className="container text-center">
                <h3 className="pt-3 pb-2">Nos produits</h3>
                <div className="products-list pt-2 pb-4">
                    <ProductList productSearch={productSearch} />
                </div>
            </div>
        </main>
    )
}
