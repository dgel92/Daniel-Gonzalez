import React from 'react';
import react, {useEffect, useState} from 'react';
import './ItemListContainer.scss';
import moviesDB from '../data/movies';
import ItemList from '../ItemList/ItemList';


function getMovies(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(moviesDB);
        }, 500);
    });    
}

function ItemListContainer({titulo}){
    const [movies, setMovies] = useState([]);
    
    
    useEffect(() => {
        getMovies().then(respuestaPromise => {
            setMovies(respuestaPromise);
        });
    }, []);

    return(
        <div className='main'>
            <div className='wrapper'>
                <ItemList movies={movies}/>
            </div>
        </div>
    )
}

export default ItemListContainer