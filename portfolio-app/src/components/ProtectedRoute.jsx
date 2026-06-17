import React, { useState, useEffect } from 'react'
import Login from "../screen/Login";

const user = {
    email: "sachinkharate2004@gmail.com",
    password: "sachin7072"
}

export default function ProtectedRoute({ children }) {

    const [newEmail, setNewEmail] = useState("")
    const [newPassword, setNewPassword] = useState("")

    useEffect(() => {
        setNewEmail(localStorage.getItem("email"))
        setNewPassword(localStorage.getItem("password"))
    }, [])

    if (user.email === newEmail && user.password === newPassword) {
        return <>{children}</>
    }

    return <Login/>
       
}