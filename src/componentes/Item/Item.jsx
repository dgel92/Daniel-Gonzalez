import React from 'react'
import {Link} from 'react-router-dom';


function Item({movie}){
    return(
        <div className='card'>
            <div className='card'>
                <div className='card_ph'><img alt= {movie.tittle} src={movie.imgUrl}/></div>
                <div className='card_text'>
                    <h1>{movie.tittle}</h1>
                    <h3>{movie.genre}</h3>
                    <p> $ {movie.price}</p>
                    <Link to= {`/item/${movie.id}`}><button className='button'>Ver mas</button></Link>
                </div>
            </div>
                <hr/>
                <br/>
        </div>
    )
}

export default Item