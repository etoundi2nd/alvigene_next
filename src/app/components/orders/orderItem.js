// {
//     "id": null,
//     "price": "2000.0",
//     "quantity": 1,
//     "created_at": null,
//     "updated_at": null,
//     "product_id": 2,
//     "products_variation_id": null,
//     "order_id": null,
//     "product": {
//         "id": 2,
//         "title": "Alvigène à la bave d'escargot et miel",
//         "base_price": "2000.0",
//         "price": "2000.0",
//         "discount_rate": 0.0,
//         "slug": "alvigene-a-la-bave-d-escargot-et-miel",
//         "short_description": "Un bon savon doux",
//         "description": "",
//         "ingredients": "",
//         "instructions": "",
//         "warning": "",
//         "sku": 2000,
//         "max_delivery_days": 14,
//         "min_delivery_days": 2,
//         "created_at": "2022-08-31T20:43:17.040+01:00",
//         "updated_at": "2024-06-11T11:33:01.643+01:00",
//         "products_category_id": 1,
//         "taxation_id": 1
//     }
// }

import Image from 'next/image';
import Link from 'next/link';

export default function OrderItem(data) {
	return (
    <div className="order-item">
      <div className="order-item--product mb-0-5">
        {/* href={`/products/${data.product.slug}`} */}
        {/* <Link>
          <div className="card-img">
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
          </div>
        </Link> */}
        <div>
          <h6>
            {/* <Link href={`/products/${data.product.slug}`}>
              <strong>{data.product.title}</strong>
            </Link> */}
          </h6>
          <div>
            Prix unitaire: <strong>2 000FCFA</strong>
          </div>
          <div>
            Prix TTC: <strong>4 770FCFA</strong>
            <small className="text-gray-600">(TVA: 19,25%)</small>
          </div>
        </div>
      </div>

      <div className="order-item--quantity d-flex flex-row">
        <form>
          <div className="order-item--quantity-selector">
            <input type="submit" name="commit" value="-" />
            <input
              id="order_item_quantity_79"
              type="text"
              value="2"
              name="order_item[quantity]"
            />
            <input type="submit" name="commit" value="+" />
          </div>
        </form>
        <button name="button" type="submit">
          supprimer
        </button>
      </div>
    </div>
  );
}
