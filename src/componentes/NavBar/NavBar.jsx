import React from 'react';
import './NavBar.scss';
import CartWidget from '../CartWidget/CartWidget.jsx';
import imgLogo from '../../multimedia/logo2.png';
import movie from '../data/movies';
import {Link} from 'react-router-dom';

function NavBar(){
    return(
        <nav className="nav">
            <div className='brand'>
                <Link to="/"><img width="140" src={imgLogo} alt="logo tienda"/></Link>
            </div>
            <div>
                <li className='menu'>
                    <Link to="/category/drama">drama</Link>
                </li>
                <li className='menu'>
                    <Link to="/category/accion">Accion</Link>
                </li>
                <li className='menu'>
                    <Link to="/category/comedia">comedia</Link>
                </li>
                <li className='menu'>
                <Link to="/category/animada">animada</Link>
                </li>
            </div>
            <div><CartWidget/></div>
        </nav>
    )
}

export default NavBar;