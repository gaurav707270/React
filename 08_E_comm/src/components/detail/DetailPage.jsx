import React from 'react'
import { useLocation } from "react-router";

export default function DetailPage() {
    const state = useLocation();
    console.log(state)
    return (
        <div>
            <h1>detail page</h1>
            <h2>{state.state.price}</h2>
        </div>
    )
}
