import React from 'react';
import './NavBar.css';

function NavBar(){
    return(
        <nav className="nav">
            <div className='brand'><h2>Mi tienda</h2></div>
            <ul>
                <li className='menu'>
                    <a href="/">Home</a>
                </li>
                <li className='menu'>
                    <a href="/">Catalogo</a>
                </li>
                <li className='menu'>
                    <a href="/">About us</a>
                </li>
                <li className='menu'>
                    <a href="/">Carrito de compras</a>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;