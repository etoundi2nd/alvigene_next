import OrderItems from "../../orderItems/page";

export default function OffCanvas({infoOrderItem}) {

  return (
    <div
      className="offcanvas-backdrop d-block"
      data-marketing--offset-canvas-target="canvas"
    >
      <div
        className="offcanvas show"
        data-marketing--offset-canvas-target="offsetcanvas"
      >
        <div className="offcanvas-content">
          <div className="offcanvas-header">
            <span
              className="btn btn-sm btn-black me-1"
              data-action="click->marketing--offset-canvas#toggleCanvas"
            >
              <i className="close-fill js-close-search"></i>
            </span>

            <h5 className="title">Mon panier d'achat</h5>
          </div>

          <div className="offcanvas-body">
            <div className="order-items-list pb-4">
              {/* <OrderItems price={infoOrderItem.price}/> */}
            </div>
          </div>

          <div className="offcanvas-footer">
            <div className="d-flex flex-row flex-wrap justify-content-between mb-1-5">
              <span className="pe-1">Total de la commande:</span>
              {/* <strong><%= render 'marketing/orders/total_with_vat', order: order %></strong> */}
            </div>

            <div className="d-flex flex-row flex-wrap justify-content-between g-1">
              {/* <%= link_to 'Continuer mes achats',
                                '#',
                                className: 'btn btn-white me-1',
                                data: {
                                    action: 'click->marketing--offset-canvas#toggleCanvas'
                                } %>

                    <%= link_to 'Voir mon pannier', new_order_path, className: 'btn btn-midnight-blue', data: { turbo_frame: '_top' } %> */}
            </div>
          </div>
        </div>
      </div>

      <div
        className="canvas-offspace"
        data-action="click->marketing--offset-canvas#toggleCanvas"
      ></div>
    </div>
  );
}
