import OrderItem from './orderItem'
import { useContext } from 'react'

export default function OrderItemList({ data }) {

    return (
        <div className="order-items-list pb-4">
            {data.map((item) => {
                return <OrderItem key={item.id} orderItem={item} />
            })}
        </div>
    )
}
