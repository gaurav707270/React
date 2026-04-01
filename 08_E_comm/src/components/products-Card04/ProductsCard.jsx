import React from 'react'
import { useNavigate } from "react-router";

export default function ProductsCard({ image, name, category, price, addTOCart }) {
    const navigate = useNavigate();
    return (

        <div className="card m-2 " style={{ width: 280, height: 420 }}>
            <img style={{ height: 200 }} src={image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{category}</p>
                <p className="card-text"> ${price}</p>
                <div className=' d-flex '>
                    <button style={{ height: 55 }} onClick={() => addTOCart(image, name, category, price)} className="btn btn-outline-primary m-1">
                        Add to Cart
                    </button>
                    <button style={{ height: 55 }} onClick={() => { navigate("/detail", { state: { image, name, category, price } }) }} className="btn btn-outline-primary m-1">
                        View More
                    </button>
                </div>
            </div>
        </div>
    )
}
