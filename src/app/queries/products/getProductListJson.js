import getProductList from './getProductList'
import products from '../../../../public/products/products.json'
import {saveJSON } from '../../utils/readWriteJson'

export default async function getProductListJson() {
    const data = products

    if (Object.keys(products).length === 0) {
        const product = await getProductList()
        saveJSON(filePath, product)
    } else {
        const updatedAt = data.map((product) => new Date(product.updated_at))
        const updatedAtMax = new Date(Math.max(...updatedAt))
        const products = await getProductList(updatedAtMax.toISOString())

        const productMap = new Map(data.map((product) => [product.id, product]))

        products.forEach((newProduct) => {
            productMap.set(newProduct.id, newProduct)
        })

        const productJSON = Array.from(productMap.values())

        saveJSON(filePath, productJSON)
    }

    return data
}
