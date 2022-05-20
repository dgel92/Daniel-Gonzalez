import React from 'react';
import './CartWidget.scss';
import cartWidget from '../../multimedia/carro-de-la-compra.png';
import useCartContext from '../store/cartContext/CartContext';

    function CartWidget(){
        const {cantInCart}=useCartContext();
    return(
        <div value = {{size: 40}}>
            <div className='cartwidget'>
                <div>
                    <img width="60" src={cartWidget} alt="Carrito-de-compras"/>
                </div>
                <div className='carrito'>{cantInCart()}</div>
            </div>
        </div>
    )
}

export default CartWidget

