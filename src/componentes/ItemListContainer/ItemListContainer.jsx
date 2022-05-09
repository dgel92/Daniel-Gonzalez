import React, {useEffect, useState} from 'react';
import './ItemListContainer.scss';
import portadaDB from '../data/portada/portada';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';


function getportada(categoryid){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (categoryid){
                const arrayFilterCategory = portadaDB.filter((portada) =>{
                    return portada.categoria === categoryid;
                });
                resolve(arrayFilterCategory);
            }
            else{
            return resolve(portadaDB);
            }
        },700);
    });    
}

function ItemListContainer({}){
    const [portadasEstado, setportada] = useState([]);
    const {categoryid} = useParams();    
    useEffect(() => {
        getportada(categoryid ).then( respuestaPromise => {
            setportada(respuestaPromise);
        });
    }, [categoryid]);
    return(
        <div className='main'>
            <div className='wrapper'>
                <ItemList portada={portadasEstado}/>
            </div>
        </div>
    )
}

export default ItemListContainer