import React from "react";
import moviesDB from "../data/movies";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.scss";

function ItemDetail({movie}){
    return(
        <div className='wrapperDetail'>
            <div className='cardDetail'>
                <div className='card_phDetail'><img alt= {movie.tittle} src={movie.imgUrl}/></div>
            </div>
            <div className='textDetail'>
                <div>
                    <h1>{movie.tittle}</h1>
                    <h3>{movie.genre}</h3>
                    <p> $ {movie.price}</p>
                </div>
                <ItemCount stock= {movie.stock} inicial={1}/>
            </div>
            
                <hr/>
                <br/>
        </div>
    )
}
export default ItemDetail
