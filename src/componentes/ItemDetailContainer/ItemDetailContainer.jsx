import react, {useEffect, useState} from 'react';
import moviesDB from '../data/movies';
import ItemDetail from '../ItemDetail/ItemDetail';


function getMovie(id){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const movieFound = moviesDB.find((movie) => {
                return id === movie.id
            })
            resolve(movieFound);
        },2000);
    });    
}

function ItemDetailContainer({id}){
    const [movie, setMovie] = useState([]);    
    useEffect(() => {
        getMovie(id).then(respuestaPromise => {
            setMovie(respuestaPromise);
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

export default ItemDetailContainer 