import react, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import portadaDB from '../data/portada/portada';
import ItemDetail from '../ItemDetail/ItemDetail';


function getportada(portadaid){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const portadaFound = portadaDB.find((portada) => {
                return portada.id == portadaid
            })
            resolve(portadaFound);
        },700);
    });    
}

function ItemDetailContainer({id}){
    const [portada, setPortada] = useState([]); 
    const {portadaid} =useParams();  
    useEffect(() => {
        getportada(portadaid).then(respuestaPromise => {
            setPortada(respuestaPromise);
        });
    }, [portadaid]);

    return(
        <div className='main'>
            <div className='wrapper'>
                <ItemDetail portada={portada}/>
            </div>
        </div>
    )
}

export default ItemDetailContainer 
