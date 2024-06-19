import React from 'react'
import AppName from '../AppName'
import { Link } from 'react-router-dom';

export default function Index() {
    return (
        <>
            <div><AppName appname={"Welcome to SuperApp"} /></div>
            <div>
                <Link to="/movie-finder">Movie Finder</Link> <br /> <br />
                <Link to="/bank-details">Bank Details</Link> <br /> <br />
                <Link to="/todo-app">ToDo App</Link> <br /> <br />
                <Link to="/github-account-finder">GitHub Account Finder</Link> <br /> <br />
                <Link to="/"></Link> <br /> <br />
            </div>
        </>
    )
}
