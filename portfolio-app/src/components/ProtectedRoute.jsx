import React, { useState, useEffect } from 'react'

const user = {
    email: "sachinkharate2004@gmail.com",
    password: "sachin7072"
}


export default function ProtectedRoute({ children }) {

    let newEmail
    let newPassword

    const getUserPassword = () => {
        newEmail = localStorage.getItem("email")
        newPassword = localStorage.getItem("passwprd")

    }

    useEffect(() => {
        getUserPassword
    }, [])


    if (user.email == newEmail && user.password == newPassword) {
        return <>
            {children}
        </>
    }

    return (
        <div>
            {
                children
            }
        </div>
    )
}
