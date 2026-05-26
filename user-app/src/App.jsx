import React, { use, useState } from 'react'
import users from "./data/user";
import { newUser } from "./data/user";

export default function App() {

    const [allUser, setAllUser] = useState([...users])


    const addUser = () => {
        setAllUser([...allUser, ...newUser]);
    };

    const deleteUser = (i) => {
        const temp = [...allUser]
        temp.splice(i, 1)
        setAllUser(temp
        )
    }

    return (
        <div className=' d-flex w-100 flex-wrap justify-content-center bg-dark'>
            <div className=' w-100 m-2 d-flex justify-content-end '>
                <button className='btn btn-primary   ' onClick={() =>
                    addUser()
                }>
                    add user
                </button>
            </div>
            {allUser.map((user, i) => {
                return (<div key={i} className="card m-2" style={{ width: "250px" }}>
                    <img src={user.profileImg} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{user.name}</h5>
                        <p className="card-text">
                            {user.email}
                        </p>
                        <a href="#" onClick={() => deleteUser(i)} className="btn btn-danger">
                            delete
                        </a>
                    </div>
                </div>)



            })}


        </div>
    )
}
