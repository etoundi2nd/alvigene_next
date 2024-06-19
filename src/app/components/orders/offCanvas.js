import OrderItems from './orderItemList';

export default function OffCanvas(data) {
	// parse data to display the order items

	return (
		<div class="offcanvas-backdrop d-block" data-marketing--offset-canvas-target="canvas">
			<div class="offcanvas show" data-marketing--offset-canvas-target="offsetcanvas">
				<div class="offcanvas-content">
					<div class="offcanvas-header">
						<span class="btn btn-sm btn-black me-1" data-action="click->marketing--offset-canvas#toggleCanvas">
							<i class="close-fill js-close-search"></i>
						</span>

						<h5 class="title">Mon panier d'achat</h5>
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

			<div class="canvas-offspace" data-action="click->marketing--offset-canvas#toggleCanvas"></div>
		</div>
	);
}
