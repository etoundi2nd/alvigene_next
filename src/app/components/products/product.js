'use client'

import Image from 'next/image'
import Link from 'next/link'
import OffCanvas from '../orders/offCanvas'
import { argumentWithUser } from '../../utils/currentUserId'
import React, { useState } from 'react'
import productImageUrl from '../../utils/productImageUrl'

export default function Product({ product }) {
    const { title, description, price, slug, id } = product
    const [data, setData] = useState({})
    const [showOffCanvas, setShowOffCanvas] = useState(false)

    async function addToCart(event) {
        event.preventDefault()

        const requestBody = argumentWithUser({
            product_id: id,
            order_id: localStorage.getItem('order_id')
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
            setData(responseData)
            setShowOffCanvas(true)
            localStorage.setItem('order_id', responseData.id)
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
                        <span className="name" style={{ textdecoration: 'none !important' }}>
                            <Link href={`/products/${slug}`}>
                                <strong>{title}</strong>
                            </Link>
                        </span>
                    </div>
                    <p className="description mb-1">{description}</p>
                    <div className="price-cta">
                        <div>
                            <span className="product-price">{price}FCFA</span>
                            <small>TTC</small>
                        </div>
                        <button onClick={addToCart} type="submit" className="btn btn-sm btn-green border-green">
                            Acheter
                        </button>
                    </div>
                </div>
            </div>

            {showOffCanvas && data && <OffCanvas data={data} setShowOffCanvas={setShowOffCanvas} />}
        </>
    )
}
