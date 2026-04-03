import React from 'react'
import { useLocation } from "react-router";

export default function DetailPage() {
    const state = useLocation();
    console.log(state)
    return (
        <div className=' d-flex container my-5 bg-dark py-3 shadow rounded '>


            <div className=' w-50'>
                <img src={state.state.image} alt={state.state.name} className="w-75" />
            </div>

            <div className="card text-center w-50 h-100">
                <div className="card-header">Featured</div>
                <div className="card-body">

                    <h5 className="card-title">{state.state.name}</h5>

                    <p className="card-text">
                        {state.state.des}
                    </p>

                    <p className="card-text fs-5">
                        In stock :
                        {state.state.stock}
                    </p>

                    <p className="card-text fs-5">
                        {state.state.dis} % Off
                    </p>



                    <p className="card-text fs-4">
                        Price  $ : {state.state.price}
                    </p>


                    <a href="/" className="btn btn-primary">
                        Go somewhere
                    </a>
                </div>
                <div className="card-footer text-body-secondary">2 days ago</div>
            </div>

        </div>
    )
}
