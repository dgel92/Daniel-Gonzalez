import React from 'react';
import react, {useEffect, useState} from 'react';
import './ItemListContainer.scss';
import moviesDB from '../data/movies';
import ItemList from '../ItemList/ItemList';
import ItemDetail from '../ItemDetail/ItemDetail';


function getMovie(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(moviesDB);
        },5000);
    });    
}

function ItemListContainer({}){
    const [movie, setMovie] = useState([]);
    
    
    useEffect(() => {
        getMovie().then(respuestaPromise => {
            setMovie(respuestaPromise[0]);
        });
    }, []);

    return(
        <div className='main'>
            <div className='wrapper'>
                <ItemDetail movie={movie}/>
            </div>
        </div>
    )
}

export default ItemListContainer