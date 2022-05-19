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
                <h4>{item.tittle}</h4>
                <div className='card_phDetail'><img alt= {item.tittle} src={item.imgUrl}/></div>
            </div>
            <div className='textDetail'>
                <div>
                    <h2>Precio ${item.price}</h2>
                    <br></br>
                    <h4> Stock={item.stock}</h4>
                    <br></br>
                    <br></br>
                    <h6>Productos similares</h6>
                        <div className="productosSimilares">
                            {item.categoria.map((cat) =><Link to={"/category/" + cat}><><button className="productosSimilares_text">{cat}</button></></Link>)}
                        </div>

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