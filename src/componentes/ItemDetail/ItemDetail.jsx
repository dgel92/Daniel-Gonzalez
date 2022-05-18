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
    };
    if (!item){
        return <h4> Cargando...</h4>
    }
    else{
    return(
        <div className='wrapperDetail'>
            <div className='cardDetail'>
                <div className='card_phDetail'><img alt= {item.tittle} src={item.imgUrl}/></div>
            </div>
            <div className='textDetail'>
                <div>
                    <h1>{item.tittle}</h1>
                    <p> ${item.precio}</p>
                    {item.categoria.map((cat) =><Link to={"/category/" + cat}>{cat}</Link>)}

                {isInCart?
                <button><Link to="/cart" onClick={CartWidget}>Ir al carrito</Link></button>
                :
                <ItemCount onAdd={onAdd} stock= {item.stock} inicial={1}/>
    }
                </div>
            </div>
        </div>
    )}
};
export default ItemDetail