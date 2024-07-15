export default function formatPrice(price) {
    return new Intl.NumberFormat('fr-CM', { style: 'currency', currency: 'XAF' }).format(price)
}
