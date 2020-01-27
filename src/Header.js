import React from 'react'
import { Link } from 'react-router-dom'
import logo from './logo.svg'
import './App.css'

function Header() {
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <Link to={'/'}>
                <h3>Home</h3>
            </Link>
            <Link to={'/form/'}>
                <h3>Create a Post Form</h3>
            </Link>
        </header>
    )
}

export default Header
