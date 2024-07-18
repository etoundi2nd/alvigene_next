'use client'

import Link from 'next/link'
import OrderItemList from './orders/orderItemList'
import formatPrice from '../utils/formatPrice'
import { useCart } from './contexts/CartContext'

function cart({ pendingOrder, closeOffCanvas }) {
    return (
        <div id="offcanvas" className="offcanvas-backdrop d-block">
            <div className="offcanvas show">
                <div className="offcanvas-content">
                    <div className="offcanvas-header">
                        <span className="btn btn-sm btn-black me-1" onClick={closeOffCanvas}>
                            <i className="ri-close-fill"></i>
                        </span>

                        <h5 className="title">Mon panier d'achat</h5>
                    </div>

                    <div className="offcanvas-body">{pendingOrder.order_items && <OrderItemList />}</div>

                    <div className="offcanvas-footer">
                        <div className="d-flex flex-row flex-wrap justify-content-between mb-1-5">
                            <span className="pe-1">Total de la commande:</span>
                            <strong>{pendingOrder.calculated_total_with_vat && formatPrice(pendingOrder.calculated_total_with_vat)}</strong>
                        </div>

                        <div className="d-flex flex-row flex-wrap justify-content-between g-1">
                            <button className="btn btn-white me-1" onClick={closeOffCanvas}>
                                Continuer mes achats
                            </button>

                            <Link className="btn btn-midnight-blue" href="/orders">
                                Voir mon pannier
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="canvas-offspace" onClick={closeOffCanvas}></div>
        </div>
    )
}

export default function OffCanvas() {
    const { pendingOrder, showOffcanvas, setShowOffcanvas } = useCart()
    const closeOffCanvas = () => setShowOffcanvas(false)

    return showOffcanvas && cart({ pendingOrder, closeOffCanvas })
}
