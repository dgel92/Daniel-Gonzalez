import React from 'react';
import {Link} from 'react-router-dom';

function Item({portada}){
    return(
        <div className='card'>
            <div className='card'>
            <div className='card_ph'><img alt= {portada.tittle} src={portada.imgUrl}/></div>
                <div className='card_text'>
                    <h1>{portada.tittle}</h1>
                    <p> $ {portada.precio}</p>
                    <h7>{portada.categoria}</h7>
                    <hr/>
                    <br/>
                    <Link to= {`/portada/${portada.id}`}><button className='button'>Ver mas</button></Link>
                </div>
            </div>
                <hr/>
                <br/>
        </div>
    )
}

export default Item

