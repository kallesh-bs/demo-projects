import React from 'react'
import { Link } from 'react-router-dom'

export default function AppName({ appname }) {
    return (
        <h1 style={{ backgroundColor: "#ffb74d", padding: "10px", borderRadius: "10px" }}>{appname} {location.pathname !== '/' && <>&nbsp;&nbsp;&nbsp;<Link to="/" style={{ fontSize: "1.2rem", textDecoration: "none", border: "1px solid black", padding: "5px", borderRadius: "5px" }}>Home</Link> <br /></>} </h1>
    )
}
