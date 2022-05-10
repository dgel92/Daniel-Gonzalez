import React, {useEffect, useState} from 'react';
import './ItemListContainer.scss';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import totalProductos from '../data/componentesPc/totalProductos';


function getportada(categoryid){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (categoryid){
                const arrayFilterCategory = totalProductos.filter((portada) =>{
                    return portada.categoria === categoryid;
                });
                resolve(arrayFilterCategory);
            }
            else{
                const arrayFilterCategory = totalProductos.filter((item) =>{
                    return item.portada === true;
            });
            resolve(arrayFilterCategory);
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