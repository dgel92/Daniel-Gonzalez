import react, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import moviesDB from '../data/movies';
import ItemDetail from '../ItemDetail/ItemDetail';


function getMovie(id){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const movieFound = moviesDB.find((movie) => {
                return id == movie.id
            })
            resolve(movieFound);
        },700);
    });    
}

function ItemDetailContainer({id}){
    const [movie, setMovie] = useState([]); 
    const {itemid} =useParams();  
    useEffect(() => {
        getMovie(itemid).then(respuestaPromise => {
            setMovie(respuestaPromise);
        });
    }, [itemid]);

    return(
        <div className='main'>
            <div className='wrapper'>
                <ItemDetail movie={movie}/>
            </div>
        </div>
    )
}

export default ItemDetailContainer 