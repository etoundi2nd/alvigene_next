
import { promises as fs } from 'fs'
// const fs = require('fs')

export async function loadJSON(filePath) {
    const data = await fs.readFile(filePath, 'utf8')
    return JSON.parse(data)
}

export async function saveJSON(filePath, json) {
    await fs.writeFile(filePath, JSON.stringify(json, null, 4))
}
