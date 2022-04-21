import React from 'react';
import './NavBar.scss';
import CartWidget from '../CartWidget/CartWidget.jsx';
import imgLogo from '../../multimedia/logo2.png';

function NavBar(){
    return(
        <nav className="nav">
            <div className='brand'><img width="140" src={imgLogo} alt="logo tienda"/></div>
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
            <div><CartWidget/></div>
        </nav>
    )
}

export default NavBar;