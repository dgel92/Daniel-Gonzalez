import react, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import itemsDB from '../data/componentesPc/totalProductos';
import ItemDetail from '../ItemDetail/ItemDetail';


function getItem(itemid){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const itemFound = itemsDB.find((item) => {
                return item.id == itemid
            })
            resolve(itemFound);
        },700);
    });    
}

function ItemDetailContainer({id}){
    const [item, setItem] = useState({categoria: []}); 
    const {portadaid} =useParams();  
    useEffect(() => {
        getItem(portadaid).then(respuestaPromise => {
            setItem(respuestaPromise);
        });
    }, [portadaid]);

    return(
        <div className='main'>
            <div className='wrapper'>
                <ItemDetail item={item}/>
            </div>
        </div>
    )
}

export default ItemDetailContainer 
