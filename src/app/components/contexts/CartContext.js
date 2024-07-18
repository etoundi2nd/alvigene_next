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
    const [pendingOrder, setPendingOrderState] = useState({})
    const [showOffcanvas, setShowOffcanvas] = useState(false)

    const setPendingOrder = (order) => {
        localStorage.setItem('alvigene_next_cart_data', JSON.stringify(order))
        setPendingOrderState(order)
    }

    return <CartContext.Provider value={{ pendingOrder, setPendingOrder, showOffcanvas, setShowOffcanvas }}>{children}</CartContext.Provider>
}

export default CartProvider
