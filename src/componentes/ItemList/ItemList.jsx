import React from 'react'
import Item from '../Item/Item'


function ItemList( {movies} ) {
    return (
        <>       
        { movies.map(thismovie => {
            return(
            <Item movie={thismovie} key={thismovie.id}/>
            )
        }) }
        </>
    )
}

export default ItemList
