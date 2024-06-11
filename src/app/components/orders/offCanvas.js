export default function OffCanvas() {
  return (
    <div
      class="offcanvas-backdrop d-block"
      data-marketing--offset-canvas-target="canvas"
    >
      <div
        class="offcanvas show"
        data-marketing--offset-canvas-target="offsetcanvas"
      >
        <div class="offcanvas-content">
          <div class="offcanvas-header">
            <span
              class="btn btn-sm btn-black me-1"
              data-action="click->marketing--offset-canvas#toggleCanvas"
            >
              <i class="close-fill js-close-search"></i>
            </span>

            <h5 class="title">Mon panier d'achat</h5>
          </div>

          <div class="offcanvas-body">
            <div class="order-items-list pb-4">
              {/* <%= render partial: 'marketing/order_items/order_item', collection: order_items %> */}
            </div>
          </div>

          <div class="offcanvas-footer">
            <div class="d-flex flex-row flex-wrap justify-content-between mb-1-5">
              <span class="pe-1">Total de la commande:</span>
              {/* <strong><%= render 'marketing/orders/total_with_vat', order: order %></strong> */}
            </div>

            <div class="d-flex flex-row flex-wrap justify-content-between g-1">
              {/* <%= link_to 'Continuer mes achats',
                                '#',
                                class: 'btn btn-white me-1',
                                data: {
                                    action: 'click->marketing--offset-canvas#toggleCanvas'
                                } %>

                    <%= link_to 'Voir mon pannier', new_order_path, class: 'btn btn-midnight-blue', data: { turbo_frame: '_top' } %> */}
            </div>
          </div>
        </div>
      </div>

      <div
        class="canvas-offspace"
        data-action="click->marketing--offset-canvas#toggleCanvas"
      ></div>
    </div>
  );
}
