export default function order() {
    return (
        <main className="main">
            <div className="py-2 container ">
                <h5 className="title text-center">Mon panier d'achat</h5>

                <div className="d-flex flex-row mt-3 order-container">
                    <div className="order-items-list">
                        {/* <turbo-frame id="tf_order_item_card_683"> */}
                        <div className="order-item">
                            <div className="order-item--product mb-0-5">
                                <a className="me-1" href="/products/1">
                                    {/* <img src="/assets/products/soaps/alvigene_soap_bar_snail_slime_cover_green-3ca50772919a9b82a4139ed9aacb5c835f23ce0b75034e7e922453a2dc9a13ec.jpg" /> */}
                                </a>

                                <div>
                                    <h6>
                                        <a href="/products/1">Savons Bio Alvigène à la bave pure d&#39;escargot</a>
                                    </h6>
                                    <div>
                                        Prix unitaire: <strong>1 000FCFA</strong>
                                    </div>
                                    {/* <turbo-frame id="tf-price-with-vat-683"> */}
                                    <div>
                                        Prix TTC: <strong>1 193FCFA</strong>
                                        <small className="text-gray-600">(TVA: 19,25%)</small>
                                    </div>
                                    {/* </turbo-frame> */}
                                </div>
                            </div>

                            <div className="order-item--quantity d-flex flex-row">
                                <form id="order_item_683" action="/order_items/683" method="post">
                                    <input type="hidden" name="_method" />
                                    <input type="hidden" name="authenticity_token" />
                                    <div className="order-item--quantity-selector">
                                        <input type="submit" name="commit" value="-" />
                                        <input id="order_item_quantity_683" type="text" value="1" name="order_item[quantity]" />
                                        <input type="submit" name="commit" value="+" />
                                    </div>
                                </form>
                                <form action="/order_items/683" method="post">
                                    <input type="hidden" name="_method" />
                                    <input type="hidden" name="authenticity_token" />
                                    <button name="button" type="submit">
                                        supprimer
                                    </button>
                                </form>{' '}
                            </div>
                        </div>
                        {/* </turbo-frame> */}
                    </div>

                    <div className="order-summary">
                        <h5 className="title text-center">Resume de la commande</h5>

                        <div className="d-flex flex-row flex-wrap justify-content-between py-0-5">
                            <span className="pe-1">Total de la commande:</span>
                            <strong>
                                <turbo-frame id="tf_offcanvas_cart_total">1 193FCFA</turbo-frame>
                            </strong>
                        </div>

                        <div className="d-flex flex-row flex-wrap justify-content-between py-0-5">
                            <span className="pe-1">Frais de livraison:</span>
                            <strong>2 000FCFA</strong>
                        </div>

                        <div className="d-flex flex-row flex-wrap justify-content-between py-0-5">
                            <span className="pe-1">Total :</span>
                            <strong>
                                <turbo-frame id="tf_total_shipping">3 193FCFA</turbo-frame>
                            </strong>
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
