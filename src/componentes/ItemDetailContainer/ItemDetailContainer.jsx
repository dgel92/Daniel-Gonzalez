import react, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import totalProductos from '../data/componentesPc/totalProductos';
import ItemDetail from '../ItemDetail/ItemDetail';


function getportada(portadaid){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const totalProductosFound = totalProductos.find((portada) => {
                return portada.id == portadaid
            })
            resolve(totalProductosFound);
        },700);
    });    
}

function ItemDetailContainer({id}){
    const [portada, setPortada] = useState({categoria: []}); 
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
