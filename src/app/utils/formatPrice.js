export default function formatPrice(price, shipping = 0) {
    let price_with_shipping = parseFloat(price)

    if (shipping !== 0) {
        price_with_shipping = parseFloat(price) + shipping
    } else {
        price_with_shipping = parseFloat(price)
    }

    return new Intl.NumberFormat('fr-CM', { style: 'currency', currency: 'XAF' }).format(price_with_shipping)
}
