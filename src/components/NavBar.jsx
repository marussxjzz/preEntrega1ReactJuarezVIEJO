import React from "react"
import CartWidget from "./CartWidget"

const NavBar = () => {

    return (
        <nav className="navbar">
            <a className="navbarElement" href="#">Inicio</a>
            <a className="navbarElement" href="#">Productos</a>
            <a className="navbarElement" href="#">Información</a>
            <CartWidget/>
        </nav> 
    )
}

export default NavBar