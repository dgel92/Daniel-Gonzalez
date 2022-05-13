import React, {useState} from "react";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.scss";
import {Link} from 'react-router-dom';
import CartWidget from "../CartWidget/CartWidget";
import useCartContext from "../store/cartContext/CartContext";


function ItemDetail({portada}){
    const [isInCart, setIsInCart] = useState(false);
    const {addToCard}=useCartContext();
    function onAdd(count){
        setIsInCart(true);
        addToCard(portada, count);
        console.log("agregado al cart:", portada, count);
    }

    return(
        <div className='wrapperDetail'>
            <div className='cardDetail'>
                <div className='card_phDetail'><img alt= {portada.tittle} src={portada.imgUrl}/></div>
            </div>
            <div className='textDetail'>
                <div>
                    <h1>{portada.tittle}</h1>
                    <h3>{portada.genre}</h3>
                    <p> $ {portada.precio}</p>
                    {portada.categoria.map((cat) =><Link to={"/categorias/" + cat}>{cat}</Link>)}

                {isInCart?
                <button><Link to="category/CartWidget" onClick={CartWidget}>Finalizar compra y ir al carrito</Link></button>
                :
                <ItemCount onAdd={onAdd} stock= {portada.stock} inicial={1}/>
                }
                </div>
            </div>
        </div>
)};

export default ItemDetail
 