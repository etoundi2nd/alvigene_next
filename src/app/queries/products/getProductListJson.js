import getProductList from './getProductList.js'
// import products from '../../../../public/products/products.json' assert { type: 'json' }
import { saveJSON, loadJSON } from '../../utils/readWriteJson.js'

async function getProductListJson() {
    const filePath = path.join(process.cwd(), 'public/products/products.json')

    // Ensure the directory exists before writing the file
    fs.mkdir(path.dirname(filePath), { recursive: true })

    // const data = products
    const data = loadJSON(filePath)
    console.log(data)

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

export default getProductListJson
