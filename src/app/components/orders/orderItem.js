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
import { useState } from 'react';

export default function OrderItem(data) {

  const product_image = data.orderItem.product.image_url
    ? data.orderItem.product.image_url
    : "/products/No-Image-Placeholder.svg";
  const [count, setCount] = useState(data.orderItem.quantity);

  const increment = (event) => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

async function UpdateOrderItem(event) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  const requestBody = {...Object.fromEntries(formData.entries())}
console.log(Object.fromEntries(formData.entries()));
console.log(requestBody.order_item_id);
  // 'use server'
  const res = await fetch(`http://localhost:3001/api/v1/order_items/${requestBody.order_item_id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "API-Key": process.env.DATA_API_KEY,
    },
    body: JSON.stringify(requestBody),
  });
  console.log(res);
  const data = await res.json();
  console.log(data)
  return data
}

	return (
    <div className="order-item">
      <div className="order-item--product mb-0-5">
        <Link href={`/products/${data.orderItem.product.slug}`}>
          <div className="card-img">
            <Image
              width={200}
              height={200}
              alt="logo"
              className="img-fluid"
              src={product_image}
              style={{
                width: "70%",
                height: "40%",
              }}
            />
          </div>
        </Link>
        <div>
          <h6>
            <Link href={`/products/${data.orderItem.product.slug}`}>
              <strong>{data.orderItem.product.title}</strong>
            </Link>
          </h6>
          <div>
            Prix unitaire: <strong>{data.orderItem.price}FCFA</strong>
          </div>
          <div>
            Prix TTC: <strong>4 770FCFA</strong>
            <small className="text-gray-600">(TVA: 19,25%)</small>
          </div>
        </div>
      </div>

      <div className="order-item--quantity d-flex flex-row">
        <form onSubmit={UpdateOrderItem}>
          <input
            type="hidden"
            name="order_item_id"
            value={`${data.orderItem.id}`}
          />
          <input type="hidden" name="order_id" value={`${data.orderItem.order_id}`} />
          <div className="order-item--quantity-selector">
            <input type="submit" name="commit" value="-" onClick={decrement} />
            <input
              id="order_item_quantity_79"
              type="text"
              value={count}
              name="order_item[quantity]"
            />
            <input type="submit" name="commit" value="+" onClick={increment} />
          </div>
        </form>
        <button name="button" type="submit">
          supprimer
        </button>
      </div>
    </div>
  );
}
