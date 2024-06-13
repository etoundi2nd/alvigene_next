'use client';

import Image from 'next/image';
import Link from 'next/link';
import OffCanvas from '../orders/offCanvas';

function getCurrentUserId() {
	localStorage.getItem('currentUserId') || localStorage.setItem('currentUserId', crypto.randomUUID());
	return localStorage.getItem('currentUserId');
}

export default async function Product({ product }) {
	const { title, description, price, image_url, slug, id } = product;
	const product_image = image_url ? image_url : '/products/No-Image-Placeholder.svg';

	async function onSubmit(event) {
		event.preventDefault();

		const formData = new FormData(event.currentTarget);
		// We need to get the current user id from the session
		const requestBody = { current_user_id: getCurrentUserId(), ...Object.fromEntries(formData.entries()) };
		console.log(requestBody);

		const response = await fetch('http://localhost:3001/api/v1/order_items', {
			headers: {
				'Content-Type': 'application/json',
			},
			method: 'POST',
			body: JSON.stringify(requestBody),
		});

		const data = await response.json();
		if (response.ok) {
			console.log('Order item created');

			// Open the offcanvas
		} else {
			console.log('Order item not created');
		}

		console.log(data);
	}

	return (
		<div className="card card-product">
			<div className="card-img">
				<Image
					width={400}
					height={400}
					alt="logo"
					className="img-fluid"
					src={product_image}
					style={{
						width: '100%',
						height: 'auto',
					}}
				/>
			</div>
			<div className="card-body">
				<div>
					<span className="name" style={{ textdecoration: 'none !important' }}>
						<Link href={`/products/${slug}`}>
							<strong>{title}</strong>
						</Link>
					</span>
				</div>
				<p className="description mb-1">{description}</p>
				<div className="price-cta">
					<div>
						<span className="product-price">{price}FCFA</span>
						<small>TTC</small>
					</div>
					<form action="/orderItems" method="post" onSubmit={onSubmit}>
						<input type="hidden" name="product_id" value={`${id}`} />
						<button type="submit" className="btn btn-sm btn-green border-green">
							Acheter
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}
