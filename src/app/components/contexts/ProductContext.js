'use client'

import React, { createContext, useState } from 'react'

export const ProductContext = createContext({})

export const useProduct = () => {
    const product = React.useContext(ProductContext)
    if (!product) {
        throw new Error('useCart must be used within a CartProvider')
    }
    return product
}

const ProductProvider = ({ children }) => {
    const [researchProduct, setResearchProductState] = useState({})

    const setProductList = (search) => {
        setResearchProductState(search)
    }

    return <ProductContext.Provider value={{ researchProduct, setProductList }}>{children}</ProductContext.Provider>
}

export default ProductProvider
