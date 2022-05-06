import React, {useEffect, useState} from 'react';
import './ItemListContainer.scss';
import moviesDB from '../data/movies';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';


function getMovies(idcategory){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (idcategory){
                const arrayCategory = moviesDB.filter((movies) =>{
                    return movies.genero === idcategory;
                });
                resolve(arrayCategory);
            }
            else{
            return resolve(moviesDB);
            }
        },700);
    });    
}

function ItemListContainer({}){
    const [moviesEstado, setMovies] = useState([]);
    const {idcategory} = useParams();    
    useEffect(() => {
        getMovies(idcategory).then( respuestaPromise => {
            setMovies(respuestaPromise);
        });
    }, [idcategory]);
    return(
        <div className='main'>
            <div className='wrapper'>
                <ItemList movie={moviesEstado}/>
            </div>
        </div>
    )
}

export default ItemListContainer