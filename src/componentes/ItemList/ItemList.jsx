import React from 'react';
import Item from '../Item/Item';

function ItemList( {portada} ) {
    return (
        <>       
        {portada.map(thisportada => {
            return(
            <Item portada={thisportada} key={thisportada.id}/>
            )
        }) }
        </>
    )
}

export default ItemList
