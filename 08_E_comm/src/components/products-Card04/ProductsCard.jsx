import React from 'react'
import { useNavigate } from "react-router";

export default function ProductsCard({ image, name, category, price, des, dis, stock, addToCart }) {
    const navigate = useNavigate();

    return (
        <div className="card m-2 my-5" style={{ width: 280 }}>
            <img style={{ height: 200 }} src={image} className="card-img-top" alt={name} />

            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{category}</p>
                <p className="card-text">${price}</p>

                <div className='d-flex'>
                    <button
                        onClick={() => addToCart({ image, name, category, price, qty: 1 })}
                        className="btn btn-outline-primary m-1 w-100"
                    >
                        Add to Cart
                    </button>

                    <button
                        onClick={() => navigate("/detail", { state: { image, name, category, price, des, dis, stock } })}
                        className="btn btn-outline-primary m-1 w-100"
                    >
                        View More
                    </button>
                </div>
            </div>
        </div>
    )
}