import { testimonies } from "../utils/testimonies"
import Image from "next/image"

export default function Testimonies() {
    return (
        <main className="main">
            <div className="index-our-customers pb-4">
                <div className="container text-center">
                    <h3 className="pt-3 pb-3">Alvigène selon nos clients ✌️</h3>

                    <hr />
                    {testimonies.map((t) => (
                        <>
                            <div className="index-our-customers--content py-3" key={t.name}>
                                <div className="main-customer">
                                    <div className="message py-1">{t.comment}</div>
                                    <div className="customer-details py-2">
                                        <div className="mb-1">
                                            <Image width={300} height={300}  className="avatar" src={t.url} alt={t.name}/>
                                        </div>
                                        <h5>{t.name}</h5>
                                        <em className="text-gray-500">{t.city}</em>
                                    </div>
                                </div>
                            </div>
                            <hr />
                        </>
                    ))}
                </div>
            </div>
        </main>
    )
}
