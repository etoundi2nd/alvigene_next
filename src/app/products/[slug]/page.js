import React from 'react'
import Image from 'next/image'
import getProduct from '../../queries/products/getProduct'
import productImageUrl from '../../utils/productImageUrl'

export default async function Page({ params: { slug } }) {
    const product = await getProduct(slug)

    return (
        <div className="container pb-3 pt-3 text-center">
            <h2 className="product-title py-3">{product.title}</h2>
            <div className="product-datas">
                <div className="product-images">
                    <Image width={400} height={400} alt={product.title} className="img-product" src={productImageUrl(product.product_images_url[0])} />
                </div>
                <div className="product-description">Description: {product.description}</div>
                <div className="product-description">Ingredients: {product.ingredients}</div>
                <div className="product-description">Instruction d'utilisation: {product.instructions}</div>
            </div>
        </div>
    )
}
