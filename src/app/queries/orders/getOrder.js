export default async function getOrder(orderId) {
    const res = await fetch(`http://127.0.0.1:3001/api/v1/orders/${orderId}`, { cache: 'no-store' } )

    if (!res.ok) {
        
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    return res.json()
}
