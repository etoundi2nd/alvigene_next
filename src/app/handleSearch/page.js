import fs from 'fs'
import getProductList from '../queries/products/getProductList'

export default async function Page() {
    if (Object.keys(loadJSON('./public/products/products.json')).length === 0) {
        const products = await getProductList()
        saveJSON('./public/products/products.json', products)
    } else {
        const data = loadJSON('./public/products/products.json')
        const updatedAt = []

        for (let i = 0; i < data.length; i++) {
            console.log(data[i].updated_at)
            updatedAt.push(new Date(data[i].updated_at))
        }

        const updatedAtMax = new Date(Math.max(...updatedAt))
        console.log(updatedAtMax)

        if (updatedAtMax.present) {
            const products = await getProductList(updatedAtMax)


        }
    }

    function loadJSON(filename) {
        return JSON.parse(fs.existsSync(filename) ? fs.readFileSync(filename).toString() : 'null')
    }

    function saveJSON(filename, json = '""') {
        return fs.writeFileSync(filename, JSON.stringify(json, null, 4))
    }

}
