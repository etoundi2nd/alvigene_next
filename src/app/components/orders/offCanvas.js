import OrderItemList from './orderItemList'
import Link from 'next/link'
import formatPrice from '../../utils/formatPrice'
import { useState, useEffect, useContext } from 'react'
import {DataContext} from '../context'

export default function OffCanvas({ data, showOffCanvas, setShowOffCanvas }) {
    const [updateData, setUpdateData] = useState(null)

    function closeOffCanvas() {
        setShowOffCanvas(false)
    }

    const orderId = data.id
    localStorage.setItem('articleTotalNumber', data.article_total_number)

    return (
        <DataContext.Provider value={{ updateData, setUpdateData }}>
            <div id="offcanvas" className="offcanvas-backdrop d-block">
                <div className="offcanvas show">
                    <div className="offcanvas-content">
                        <div className="offcanvas-header">
                            <span className="btn btn-sm btn-black me-1">
                                <i className="ri-close-fill" onClick={closeOffCanvas}></i>
                            </span>

                            <h5 className="title">Mon panier d'achat</h5>
                        </div>

                        <div className="offcanvas-body">
                            <OrderItemList data={data.order_items} updateData={updateData} setUpdateData={setUpdateData} />
                        </div>

                        <div className="offcanvas-footer">
                            <div className="d-flex flex-row flex-wrap justify-content-between mb-1-5">
                                <span className="pe-1">Total de la commande:</span>
                                <strong>{formatPrice(data.calculated_total_with_vat)}</strong>
                            </div>

                            <div className="d-flex flex-row flex-wrap justify-content-between g-1">
                                <button className="btn btn-white me-1" onClick={closeOffCanvas}>
                                    Continuer mes achats
                                </button>

                                <Link className="btn btn-midnight-blue" href={`/orders/${orderId}`}>
                                    Voir mon pannier
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="canvas-offspace" onClick={closeOffCanvas}></div>
            </div>
        </DataContext.Provider>
    )
}
