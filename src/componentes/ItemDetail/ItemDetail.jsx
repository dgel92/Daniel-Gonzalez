import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.scss";
import portada from '../data/portada/portada';

function ItemDetail({portada}){
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
                    <h6>{portada.categoria}</h6>
                </div>
                <ItemCount stock= {portada.stock} inicial={1}/>

                <div>
                <p>(futura descripcion del producto)</p>
                </div>
            </div>
        </div>
    )
}
export default ItemDetail
