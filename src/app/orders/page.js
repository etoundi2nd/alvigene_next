'use client'

import Link from 'next/link'
import OrderItemList from '../components/orders/orderItemList'
import formatPrice from '../utils/formatPrice'
import { useCart } from '../components/contexts/CartContext'
import { useEffect, useState } from 'react'

export default function order() {
    const { pendingOrder, setShowOffcanvas } = useCart()
    const [offcanvasHiddenOnload, setOffcanvasHiddenOnload] = useState()
    const shippingCost = 2000

    useEffect(() => {
        if (!offcanvasHiddenOnload) setShowOffcanvas(false)
        setOffcanvasHiddenOnload(true)
    })

    return (
        <main className="main">
            <div className="py-2 container">
                <h5 className="title text-center">Mon panier d'achat</h5>

                <div className="d-flex flex-row mt-3 order-container">
                    <OrderItemList />

                    <div className="order-summary">
                        <h5 className="title text-center">Resume de la commande</h5>

                        <div className="d-flex flex-row flex-wrap justify-content-between py-0-5">
                            <span className="pe-1">Total de la commande:</span>
                            <strong>{formatPrice(pendingOrder.calculated_total_with_vat)}</strong>
                        </div>

                        <div className="d-flex flex-row flex-wrap justify-content-between py-0-5">
                            <span className="pe-1">Frais de livraison:</span>
                            <strong>{formatPrice(shippingCost)}</strong>
                        </div>

                        <div className="d-flex flex-row flex-wrap justify-content-between py-0-5">
                            <span className="pe-1">Total :</span>
                            <strong>{formatPrice(Number(pendingOrder.calculated_total_with_vat) + shippingCost)}</strong>
                        </div>

                        <Link href="/api/orders/complete_order" className="btn btn-midnight-blue my-2">
                            Finaliser mon achat
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    )
}
