import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../features/User_slice.js";

export default function Users() {
    const dispatch = useDispatch();
    const state = useSelector(state => state.user);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    return (
        <div>
            {
                state.users.map((user, i) => {
                    return (
                        <div className='row w-100 h-100 bg-black justify-content-center' key={i}>
                            <div className="card m-2 " style={{ width: "18rem" }}>
                                <div className="card-body ">
                                    <h5 className="card-title">{user.name}</h5>
                                    <h6 className="card-subtitle mb-2 text-body-secondary">{user.email}</h6>
                                    <p className="card-text">{user.username}</p>
                                </div>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
}