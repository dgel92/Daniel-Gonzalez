import React, {useEffect, useState} from 'react';
import './ItemListContainer.scss';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import itemsDB from '../data/componentesPc/totalProductos';


function getitems(categoryid){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (categoryid){
                const arrayFilterCategory = itemsDB.filter((items) =>{
                    return items.categoria.includes(categoryid);
                });
                resolve(arrayFilterCategory);
            }
            else{
                const arrayFilterCategory = itemsDB.filter((item) =>{
                    return item.portada === true;
            });
            resolve(arrayFilterCategory);
            }
        },700);
    });    
}

function ItemListContainer({}){
    const [itemsEstado, setItems] = useState([]);
    const {categoryid} = useParams();    
    useEffect(() => {
        getitems(categoryid ).then( respuestaPromise => {
            setItems(respuestaPromise);
        });
    }, [categoryid]);
    return(
        <div className='main'>
            <div className='wrapper'>
                <ItemList items={itemsEstado}/>
            </div>
        </div>
    )
}

export default ItemListContainer