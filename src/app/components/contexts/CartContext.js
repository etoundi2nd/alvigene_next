'use client'

import React, { createContext, useState } from 'react'

export const CartContext = createContext({})

export const useCart = () => {
    const cart = React.useContext(CartContext)
    if (!cart) {
        throw new Error('useCart must be used within a CartProvider')
    }
    return cart
}

const CartProvider = ({ children }) => {
    const [pendingOrder, setpendingOrder] = useState({})
    const [showOffcanvas, setShowOffcanvas] = useState(false)

    return <CartContext.Provider value={{ pendingOrder, setpendingOrder, showOffcanvas, setShowOffcanvas }}>{children}</CartContext.Provider>
}

export default CartProvider
