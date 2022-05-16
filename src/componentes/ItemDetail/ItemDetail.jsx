import React, {useState} from "react";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.scss";
import {Link} from 'react-router-dom';
import CartWidget from "../CartWidget/CartWidget";
import useCartContext from "../store/cartContext/CartContext";


function ItemDetail({item}){
    const [isInCart, setIsInCart] = useState(false);
    const {addToCard}=useCartContext();
    function onAdd(count){
        setIsInCart(true);
        addToCard(item, count);
        console.log("agregado al cart:", item, count);
    }

    return(
        <div className='wrapperDetail'>
            <div className='cardDetail'>
                <div className='card_phDetail'><img alt= {item.tittle} src={item.imgUrl}/></div>
            </div>
            <div className='textDetail'>
                <div>
                    <h1>{item.tittle}</h1>
                    <h3>{item.genre}</h3>
                    <p> $ {item.precio}</p>
                    {item.categoria.map((cat) =><Link to={"/category/" + cat}>{cat}</Link>)}

                {isInCart?
                <button><Link to="category/CartWidget" onClick={CartWidget}>Finalizar compra y ir al carrito</Link></button>
                :
                <ItemCount onAdd={onAdd} stock= {item.stock} inicial={1}/>
                }
                </div>
            </div>
        </div>
)};

export default ItemDetail
