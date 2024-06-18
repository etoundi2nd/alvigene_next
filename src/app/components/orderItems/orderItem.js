export default function OrderItemComponent({product_image, slug, price}){

    return (
      <div id="tf_order_item_card_123" className="order-item">
        <div className="order-item--product mb-0-5">
          <a href="/products/1" className="me-1">
            <Image
              width={400}
              height={400}
              alt="logo"
              className="img-fluid"
              src={product_image}
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </a>

          <div>
            <h6>
              <a href={`/products/${slug}`}>Product Title</a>
            </h6>
            <div>
              Prix unitaire: <strong>{price} FCFA</strong>
            </div>
            {/* Render partial: marketing/order_items/price_with_vat */}
            <div>
              <span>
                TVA incluse: <strong>200 FCFA</strong>
              </span>
            </div>
          </div>
        </div>
        {/*
        <div className="order-item--quantity d-flex flex-row">
            <!-- Render partial: marketing/order_items/form -->
            <form action="/order_items/1" method="post">
                <input type="hidden" name="_method" value="patch">
                <input type="number" name="order_item[quantity]" value="1">
                <button type="submit">Mettre à jour</button>
            </form>

            <form action="/order_items/1" method="post" data-turbo-method="delete">
                <input type="hidden" name="_method" value="delete">
                <button type="submit">supprimer</button>
            </form>
        </div> */}
      </div>
    );
}
