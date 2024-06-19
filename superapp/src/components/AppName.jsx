import React from 'react'
import { Link } from 'react-router-dom'

export default function AppName({ appname }) {
    return (
        <h1>{appname} {location.pathname !== '/' && <><Link to="/" style={{ fontSize: "1.2rem", textDecoration: "none" }}>Home</Link> <br /></>} </h1>
    )
}
