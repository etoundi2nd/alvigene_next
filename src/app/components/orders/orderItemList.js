'use client'

import OrderItem from './orderItem'
import { useCart } from '../contexts/CartContext'

export default function OrderItemList() {
    const { pendingOrder } = useCart()
    const orderItems = pendingOrder.order_items || []

    return (
        <div className="order-items-list pb-4">
            {orderItems.map((item) => {
                return <OrderItem key={item.id} orderItem={item} />
            })}
        </div>
    )
}
