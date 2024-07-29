'use client'

import getProductList from '../queries/products/getProductList'
import { useState } from 'react'

export default function searchProduct({ setProductSearch }) {
    const [search, setSearch] = useState('')

    async function searchParams(event) {
        event.preventDefault()

        const response = await getProductList(search)

        setProductSearch(response)
    }

    return (
        <div>
            <form className="smooth-in-animate" onSubmit={searchParams}>
                <button name="button" type="submit">
                    <i className="ri-search-line"></i>
                </button>

                <input type="text" name="search" id="search" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Chercher nos produits" />

                <button name="button" type="button">
                    <i className="ri-close-fill js-close-search"></i>
                </button>
            </form>
        </div>
    )
}
