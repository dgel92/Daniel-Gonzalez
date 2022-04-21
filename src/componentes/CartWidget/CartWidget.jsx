import React from 'react';
import './CartWidget.scss';
import cartWidget from '../../multimedia/carro-de-la-compra.png';

const CartWidget =() =>{
    return(
        <div value = {{size: 40}}>
            <div className='cartwidget'>
                <div>
                    <img width="80" src={cartWidget} alt="Carrito-de-compras"/>
                </div>
            </div>
        </div>
    )
}

export default CartWidget

