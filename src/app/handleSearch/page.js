import fs from 'fs'
import getProductList from '../queries/products/getProductList';

export default async function Page() {
    const products = await getProductList()

    function loadJSON(filename) {
        return JSON.parse(fs.existsSync(filename) ? fs.readFileSync(filename).toString() : 'null')
    }

    function saveJSON(filename, json = '""') {
        return fs.writeFileSync(filename, JSON.stringify(json, null, 4))
    }

    const data = loadJSON('./public/products/products.json')

    saveJSON('./public/products/products.json', products)


    const updatedAt = []
    for (let i = 0; i < data.length; i++) {
        updatedAt.push(new Date(data[i].updated_at))
    }

    const updatedAtMax = new Date(Math.max(...updatedAt))

    // Products.where(updated_at: (updatedAtMax)..)
}
