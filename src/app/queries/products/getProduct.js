async function getProduct(productId) {
    const res = await fetch(`http://127.0.0.1:3001/api/v1/products/${productId}`, { cache: 'reload' })
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        console.error('Failed to fetch data', res)
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export default getProduct
