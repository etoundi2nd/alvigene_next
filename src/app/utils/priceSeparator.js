function thousandSeparator(price) {
    return new Intl.NumberFormat('fr-FR').format(price)
}

export {thousandSeparator}
