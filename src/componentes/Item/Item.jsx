import React from 'react'
import movies from '../data/movies'

function Item({movie}){
    return(
        <div className='card'>
            <div className='card'>
                <div className='card_ph'><img alt= {movie.tittle} src={movie.imgUrl}/></div>
                <div className='card_text'>
                    <h1>{movie.tittle}</h1>
                    <h3>{movie.genre}</h3>
                    <p> $ {movie.price}</p>
                </div>
            </div>
                <hr/>
                <br/>
        </div>
    )
}

export default Item