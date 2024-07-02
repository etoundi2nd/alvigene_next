import OrderItemList from './orderItemList'
import { useState } from 'react'

export default function OffCanvas({ data, showOffCanvas, setShowOffCanvas }) {
    // console.log(data.responseData)

    function closeOffCanvas() {
        setShowOffCanvas(false)
    }
    return (
        <div className="offcanvas-backdrop d-block">
            <div className="offcanvas show">
                <div className="offcanvas-content">
                    <div className="offcanvas-header">
                        <span className="btn btn-sm btn-black me-1">
                            <i className="ri-close-fill" onClick={closeOffCanvas}></i>
                        </span>

                        <h5 className="title">Mon panier d'achat</h5>
                    </div>

                    <div className="offcanvas-body">
                        <OrderItemList data={data.order_items} />
                    </div>

                    <div className="offcanvas-footer">
                        <div className="d-flex flex-row flex-wrap justify-content-between mb-1-5">
                            <span className="pe-1">Total de la commande:</span>
                        </div>

                        <div className="d-flex flex-row flex-wrap justify-content-between g-1"></div>
                    </div>
                </div>
            </div>

            <div className="canvas-offspace" onClick={closeOffCanvas}></div>
        </div>
    )
}
