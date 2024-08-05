
import { promises as fs } from 'fs'

// export async function loadJSON(filePath) {
//     const data = await fs.readFile(process.cwd() + '/public/products/products.json', 'utf8')
//     // const data = fs.readFileSync(filePath, 'utf-8')
//     return JSON.parse(data)
//     // return JSON.parse(fs.existsSync(filename) ? fs.readFileSync(filename).toString() : 'null')
// }

export default async function saveJSON(filePath, json ) {
    // fs.writeFileSync(filePath, JSON.stringify(json, null, 4))
    await fs.writeFile(process.cwd() + '/public/products/products.json', JSON.stringify(json, null, 4))
}

