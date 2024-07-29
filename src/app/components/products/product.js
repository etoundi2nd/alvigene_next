'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useCart } from '../contexts/CartContext'
import { argumentWithUser } from '../../utils/currentUserId'
import productImageUrl from '../../utils/productImageUrl'
import formatPrice from '../../utils/formatPrice'

export default function Product({ product }) {
    const { title, short_description, price, slug, id } = product
    const { pendingOrder, setPendingOrder, setShowOffcanvas } = useCart()

    async function addToCart(event) {
        event.preventDefault()

        const requestBody = argumentWithUser({
            product_id: id,
            order_id: pendingOrder.id
        })

        const response = await fetch('http://localhost:3001/api/v1/order_items', {
            cache: 'no-store',
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(requestBody)
        })

        const responseData = await response.json()
        if (response.ok) {
            setPendingOrder(responseData)
            setShowOffcanvas(true)
        } else {
            // TODO: handle errors
            console.log('Order item not created')
        }
    }

    return (
        <>
            <div className="card card-product">
                <div className="card-img">
                    <Image
                        width={400}
                        height={400}
                        alt="logo"
                        className="img-fluid"
                        src={productImageUrl(product.product_images_url[0])}
                        style={{ width: '100%', height: 'auto' }}
                    />
                </div>
                <div className="card-body">
                    <div>
                        <span className="name">
                            <Link href={`/products/${slug}`}>
                                <strong>{title}</strong>
                            </Link>
                        </span>
                    </div>
                    <p className="description mb-1">{short_description}</p>
                    <div className="price-cta">
                        <div>
                            <span className="product-price">{formatPrice(price)}</span> <small>TTC</small>
                        </div>
                        <button onClick={addToCart} type="submit" className="btn btn-sm btn-green border-green">
                            Acheter
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
