// import OrderItems from "./orderItemList";
import OrderItem from './orderItem'

export default function OffCanvas({ data }) {
  // parse data to display the order items

  console.log(data);
  // const {order} = infoOrderItem
  // console.log(order);
  return (
    <turbo-stream action="update" target="tf_cart_offcanvas">
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
                <OrderItem data={data.order_items} />
              </div>
            </div>

            <div className="offcanvas-footer">
              <div className="d-flex flex-row flex-wrap justify-content-between mb-1-5">
                <span className="pe-1">Total de la commande:</span>
              </div>

              <div className="d-flex flex-row flex-wrap justify-content-between g-1"></div>
            </div>
          </div>
        </div>

        <div
          className="canvas-offspace"
          data-action="click->marketing--offset-canvas#toggleCanvas"
        ></div>
      </div>
    </turbo-stream>
  );
}
