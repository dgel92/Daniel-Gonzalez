import React, {useState} from "react";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.scss";
import {Link} from 'react-router-dom';
import useCartContext from "../store/cartContext/CartContext";
import CartView from "../store/cartView/CartView";


function ItemDetail({item}){
    const [isInCart, setIsInCart] = useState(false);
    const {addToCard}=useCartContext();

    function onAdd(count){
        setIsInCart(count);
        console.log(`se agrego ${count} de items del producto${item.name}`)
        addToCard(item, count);
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
                {item.categoria.map((cat) =><Link to={"/category/" + cat}>{cat}</Link>)}
                </div>
                {isInCart?
                <Link to="/cart">Ir al carrito</Link>
                :
                <ItemCount onAdd={onAdd} stock= {item.stock} inicial={1}/>
    }
                </div>
            </div>
        </div>
    )}
};
export default ItemDetail