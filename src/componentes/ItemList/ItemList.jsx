import React from 'react';
import Item from '../Item/Item';
import movie from '../data/movies'


function ItemList( {movie} ) {
    return (
        <>       
        {movie.map(thismovie => {
            return(
            <Item movie={thismovie} key={thismovie.id}/>
            )
        }) }
        </>
    )
}

export default ItemList
