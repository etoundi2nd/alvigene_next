import React from 'react'
import Image from 'next/image'
import getProduct from '../../queries/products/getProduct'

export default async function Page({ params: { slug } }) {
    const product = await getProduct(slug)
    const product_image = product.image_url ? product.image_url : '../products/No-Image-Placeholder.svg'

    return (
        <div class="container pb-3 pt-3 text-center">
            <h2 class="product-title py-3">{product.title}</h2>
            <div class="product-datas">
                <div class="product-images">
                    <Image width={400} height={400} alt="logo" className="img-product" src={product_image} />
                </div>
                <span class="product-description">Description: {product.description}</span>
                <span class="product-description">Ingredients: {product.ingredients}</span>
                <span class="product-description">Instruction d'utilisation: {product.instructions}</span>
            </div>
        </div>
    )
}
