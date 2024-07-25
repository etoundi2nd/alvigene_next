'use client'

import { useState } from 'react'
import { useProduct } from './contexts/ProductContext'

export default function searchProduct() {
    const [search, setSearch] = useState('')
    const { setProductList } = useProduct()

    async function searchParams(event) {
        event.preventDefault()

        const response = await fetch(`http://localhost:3001/api/v1/quick_search?search=${search}`)

        const responseData = await response.json()

        if (response.ok) {
            setProductList(responseData)
        }
    }

    return (
        <div>
            <form className="smooth-in-animate" onSubmit={searchParams}>
                <button name="button" type="submit">
                    <i className="ri-search-line"></i>
                </button>

                <input
                    type="text"
                    name="search"
                    id="search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Chercher nos produits"
                />

                <button name="button" type="button">
                    <i className="ri-close-fill js-close-search"></i>
                </button>
            </form>
        </div>
    )
}
