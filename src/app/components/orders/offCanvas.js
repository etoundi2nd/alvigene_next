import OrderItems from './orderItemList';

export default function OffCanvas(data) {
	// parse data to display the order items

export default function OffCanvas(infoOrderItem) {
  console.log(infoOrderItem);
  // const {order} = infoOrderItem
  // console.log(order);
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

					<div class="offcanvas-body">
						<div class="order-items-list pb-4">
							<OrderItems data={data.order_items} />
						</div>
					</div>

					<div class="offcanvas-footer">
						<div class="d-flex flex-row flex-wrap justify-content-between mb-1-5">
							<span class="pe-1">Total de la commande:</span>
						</div>

						<div class="d-flex flex-row flex-wrap justify-content-between g-1"></div>
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
