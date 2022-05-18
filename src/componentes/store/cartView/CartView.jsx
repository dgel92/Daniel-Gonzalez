import React from "react"
import useCartContext from '../cartContext/CartContext';
import {Link} from 'react-router-dom';

function CartView(){
const {cart, removeFromCart, clearCart}=useCartContext();
console.log("CART",cart);
    if (cart.length === 0){    
        return(
            <div>
                <h4>No hay items en el carrito</h4>
                <Link to="/">Volver al catalogo</Link>
            </div>
        )
    }
    else{
        return <div>
            {cart.map( itemCart =>{
                return <div key={itemCart.id}>
                    <h2>{itemCart.tittle}</h2>
                    <h2>{itemCart.cant}</h2>
                    <h2>{itemCart.cant * itemCart.price}</h2>
                    <button style={{color:"red"}} onClick={()=> removeFromCart(itemCart.id)}>X</button>                       
                    </div>
                    })}
                    <button onClick={clearCart}>Vaciar Carrito</button>
                <Link to="/">finalizar compra</Link>
            </div>
    }
}


export default CartView