import React from 'react';
import {Link} from 'react-router-dom';

function Item({items}){
    return(
        <div className='card'>
            <div className='card'>
            <div className='card_ph'><img alt= {items.tittle} src={items.imgUrl}/></div>
                <div className='card_text'>
                    <h1>{items.tittle}</h1>
                    <p> $ {items.precio}</p>
                    <h7>{items.categoria}</h7>
                    <hr/>
                    <br/>
                    <Link to= {`/items/${items.id}`}><button className='button'>Ver mas</button></Link>
                </div>
            </div>
                <hr/>
                <br/>
        </div>
    )
}

export default Item

