'use client'

import OffCanvas from '../components/orders/offCanvas'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'

export default function OrderItems() {
    // parse data to display the order items
    const searchParams = useSearchParams()

    const [data, setData] = useState({})

    useEffect(() => {
        // Assurez-vous que le code s'exécute côté client
        const dataParam = searchParams.get('data')
        if (dataParam) {
            const parsedData = JSON.parse(decodeURIComponent(dataParam))
            sessionStorage.setItem('data', JSON.stringify(parsedData))
            setData(parsedData) // Met à jour l'état avec les données
            // console.log(sessionStorage.getItem("data"));
        } else {
            // Si le paramètre n'est pas présent, essayez de charger depuis la sessionStorage
            const storedData = sessionStorage.getItem('data')
            if (storedData) {
                setData(JSON.parse(storedData))
            }
        }
    }, [searchParams]) // Le tableau inclut searchParams pour exécuter useEffect lorsque les paramètres changent

    return (
        <>
            <OffCanvas infoOrderItem={data} />
        </>
    )
}
