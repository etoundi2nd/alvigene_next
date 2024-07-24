// 'use client'

import ProductList from '../components/products/productList'

export default function Product() {
    // async function searchProduct(event){
    //     event.preventDefault()

    //     console.log(1)
    // }

    return (
        <main className="main">
            <div>
                <form className="smooth-in-animate">
                    <button name="button" type="submit">
                        <i className="ri-search-line"></i>
                    </button>

                    <input type="text" name="search" id="search" value="" placeholder="Chercher nos produits" />

                    <button name="button" type="button">
                        <i className="ri-close-fill js-close-search"></i>
                    </button>
                </form>
            </div>
            <div className="container text-center">
                <h3 className="pt-3 pb-2">Nos produits</h3>
                <div className="products-list pt-2 pb-4">
                    <ProductList />
                </div>
            </div>
        </main>
    )
}
