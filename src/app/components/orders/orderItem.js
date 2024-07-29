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

'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useRef, useContext, useEffect} from 'react'
import { argumentWithUser } from '../../utils/currentUserId'
import formatPrice from '../../utils/formatPrice'
import productImageUrl from '../../utils/productImageUrl'
import { useCart } from '../contexts/CartContext'

export default function OrderItem(data) {
    const product_image = productImageUrl(data.orderItem.product.product_images_url[0])
    const orderItem = data.orderItem
    const [count, setCount] = useState(data.orderItem.quantity)
    const formRef = useRef()
    const quantityRef = useRef()
    const [showOrderItem, setShowOrderItem] = useState(true)
    const { setPendingOrder } = useCart()

    const changeCounter = (event) => {
        let value = event.target.value

        if (value === '+') {
            value = count + 1
        } else if (value === '-') {
            value = count - 1
        }

        value = Number(value)
        value = isNaN(value) ? 1 : value
        value = value < 1 ? 1 : value

        setCount(value)

        quantityRef.current.value = value

        if (value !== count) {
            formRef.current.requestSubmit()
        }
    }

    async function updateOrderItem(event) {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)
        const formEntries = { ...Object.fromEntries(formData.entries()) }
        const requestBody = argumentWithUser({
            order_id: orderItem.order_id,
            order_item: { quantity: formEntries.quantity }
        })

        const response = await fetch(`http://localhost:3001/api/v1/order_items/${orderItem.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'API-Key': process.env.DATA_API_KEY
            },
            body: JSON.stringify(requestBody)
        })

        const responseData = await response.json()

        if (response.ok) {
            setPendingOrder(responseData)
        }

        return responseData
    }

    async function deleteOrderItem(event) {
        event.preventDefault()

        const response = await fetch(`http://localhost:3001/api/v1/order_items/${orderItem.id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'API-Key': process.env.DATA_API_KEY
            },
            body: JSON.stringify(argumentWithUser({ order_id: orderItem.order_id }))
        })

        const responseData = await response.json()

        if (response.ok) {
            setShowOrderItem(false)
            setPendingOrder(responseData)
        }

        return responseData
    }

    return (
        <>
            {showOrderItem && (
                <div className="order-item">
                    <div className="order-item--product mb-0-5">
                        <Link href={`/products/${orderItem.product.slug}`}>
                            <div className="card-img">
                                <Image width={200} height={200} alt="logo" className="img-fluid" src={product_image} style={{ width: '70%', height: '40%' }} />
                            </div>
                        </Link>
                        <div>
                            <h6>
                                <Link href={`/products/${orderItem.product.slug}`}>
                                    <strong>{orderItem.product.title}</strong>
                                </Link>
                            </h6>
                            <div>
                                Prix unitaire: <strong>{formatPrice(orderItem.price)}</strong>
                            </div>
                            <div>
                                Prix TTC: <strong>{formatPrice(orderItem.price_with_vat)}</strong>
                                <small className="text-gray-600"> (TVA: 19,25%)</small>
                            </div>
                        </div>
                    </div>

                    <div className="order-item--quantity d-flex flex-row">
                        <form ref={formRef} onSubmit={updateOrderItem}>
                            <div className="order-item--quantity-selector">
                                <input type="button" value="-" onClick={changeCounter} />
                                <input
                                    type="text"
                                    name="quantity"
                                    id={`order_item_${orderItem.id}`}
                                    ref={quantityRef}
                                    value={count}
                                    onChange={(e) => changeCounter(e)}
                                />
                                <input type="button" value="+" onClick={changeCounter} />
                            </div>
                        </form>

                        <button name="button" type="submit" onClick={deleteOrderItem}>
                            supprimer
                        </button>
                    </div>
                </div>
            )}
        </>
    )
}
