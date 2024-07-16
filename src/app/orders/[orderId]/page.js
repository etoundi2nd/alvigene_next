import getOrder from "../../queries/orders/getOrder";
import OrderItemList from "../../components/orders/orderItemList";
import formatPrice from "../../utils/formatPrice";

export default async function Page({ params: { orderId } }) {
    const actualOrder = await getOrder(orderId)
    const shipping = 2000
    
    return (
        <main className="main">
            <div className="py-2 container ">
                <h5 className="title text-center">Mon panier d'achat</h5>

                <div className="d-flex flex-row mt-3 order-container">
                    <OrderItemList data={actualOrder.order_items} />
                    <div className="order-summary">
                        <h5 className="title text-center">Resume de la commande</h5>

                        <div className="d-flex flex-row flex-wrap justify-content-between py-0-5">
                            <span className="pe-1">Total de la commande:</span>
                            <strong>{formatPrice(actualOrder.calculated_total_with_vat)}</strong>
                        </div>

                        <div className="d-flex flex-row flex-wrap justify-content-between py-0-5">
                            <span className="pe-1">Frais de livraison:</span>
                            <strong>{formatPrice(shipping)}</strong>
                        </div>

                        <div className="d-flex flex-row flex-wrap justify-content-between py-0-5">
                            <span className="pe-1">Total :</span>
                            <strong>{formatPrice(actualOrder.calculated_total_with_vat, shipping)}</strong>
                        </div>

                        <a className="btn btn-midnight-blue my-2" href="/complete_order">
                            Finaliser mon achat
                        </a>
                    </div>
                </div>
            </div>
        </main>
    )
}
