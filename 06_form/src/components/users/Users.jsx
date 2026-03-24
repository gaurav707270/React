import React, { useEffect, useState } from 'react';

export const Users = () => {
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState("")
    const [check, setcheck] = useState(true)

    useEffect(() => {
        const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
        setUsers(storedUsers);
    }, []);

    return (
        <div className=' container mt-5'>
            <div style={{ width: 500 }}>
                <div className="input-group mb-3">
                    <input

                        onChange={(e) => {
                            setSearch(e.target.value)
                        }}
                        style={{ width: 100 }}
                        value={search}
                        type="text"
                        id='input'
                        className="form-control border border-black"
                        aria-label="Recipient’s username"
                        aria-describedby="button-addon2"
                        placeholder=' Search User'
                    />
                    <button

                        onClick={() => {
                            setUsers(users.filter((user) => user.name.toLowerCase() === search.toLowerCase() || user.email.toLowerCase() === search.toLowerCase() || user.number === search))
                        }}
                        className="btn btn-outline-primary"
                        type="button"
                        id="search"
                    >
                        Search
                    </button>

                    <button

                        onClick={() => {
                            setUsers(JSON.parse(localStorage.getItem("users")))
                            setSearch("")
                        }}
                        className="btn btn-outline-danger"
                        type="button"
                        id="search"
                    >
                        Clear
                    </button>


                    <button
                        onClick={() => {
                            const arr = [...users];

                            if (check) {
                                arr.sort((a, b) => a.fees - b.fees);
                            } else {
                                arr.sort((a, b) => b.fees - a.fees);
                            }

                            setUsers(arr);
                            setcheck(!check);
                        }}
                        className="btn btn-outline-info"
                        type="button"
                    >
                        {check ? "Low to High" : "High to Low"}
                    </button>

                </div>
            </div>

            <div style={{ maxHeight: "550px", overflowY: "auto" }} className="container d-flex flex-wrap justify-content-center ">
                {
                    users.map((user, i) => (
                        <div style={{ width: 800 }} key={i} className=' shadow rounded  p-3 m-3'>
                            <h1 >{user.name}</h1>
                            <p>{user.email} </p>
                            <h4 >  {user.password}</h4>
                            <h5>{user.number}</h5>
                            <h5 >{user.fees}</h5>
                            <div>
                                <button className='btn btn-danger w-100'>delete</button>
                            </div>
                        </div>

                    ))
                }
            </div>
        </div>

    )
}
