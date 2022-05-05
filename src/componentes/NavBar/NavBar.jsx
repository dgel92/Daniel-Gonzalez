import React from 'react';
import './NavBar.scss';
import CartWidget from '../CartWidget/CartWidget.jsx';
import imgLogo from '../../multimedia/logo2.png';
import {Link} from 'react-router-dom';

function NavBar(){
    return(
        <nav className="nav">
            <div className='brand'>
                <Link to="/"><img width="140" src={imgLogo} alt="logo tienda"/></Link>
            </div>
            <ul>
                <li className='menu'>
                    <Link to="/category/film">Home</Link>
                </li>
                <li className='menu'>
                    <Link to="/category/accion">Catalogo</Link>
                </li>
                <li className='menu'>
                    <Link to="/drama">About us</Link>
                </li>
                <li className='menu'>
                    <Link to="/">Carrito de compras</Link>
                </li>
            </ul>
            <div><CartWidget/></div>
        </nav>
    )
}

export default NavBar;