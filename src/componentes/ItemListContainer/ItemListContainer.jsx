import React from 'react';
import react, {useEffect, useState} from 'react';
import './ItemListContainer.scss';
import moviesDB from '../data/movies';
import ItemList from '../ItemList/ItemList';
import {useParams} from 'react-router-dom';
import movie from '../data/movies';


function getMovie(categoryid){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (categoryid !== undefined){
                const arrayFiltered = moviesDB.filter((movie) =>{
                    return movie.genre === categoryid;
                });
                resolve(arrayFiltered);
            }
            else{
            resolve(moviesDB);
            }
        },500);
    });    
}



function ItemListContainer({}){
    const [movie, setMovie] = useState([]);
    const {categoryid}= useParams();    
    
    useEffect(() => {
        getMovie(categoryid).then(respuestaPromise => {
            setMovie(respuestaPromise[0]);
        });
    }, []);

    return(
        <div className='main'>
            <div className='wrapper'>
                <ItemList movie={movie}/>
            </div>
        </div>
    )
}

export default ItemListContainer