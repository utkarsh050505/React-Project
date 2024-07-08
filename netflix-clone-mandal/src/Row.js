import React from 'react';
import './Row.css';
import axios from './axios';

function Row({ title, fetchURL, isLargeRow=false}) {

    const base_url = 'https://image.tmdb.org/t/p/original/';

    const [movies, setMovies] = React.useState([])

    React.useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchURL);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
        
    }, [fetchURL])

  return (
    <div className='row'>
        <h2>{title}</h2>
        <div className='row__posters'>
        {movies.map(movie => {
            return (<img
                className={`row__poster ${isLargeRow && 'row__posterLarge'}`}
                key={movie.id} 
                src={`${base_url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
            }`} alt={movie.name}/>
            )})}
        </div>
    </div>
  )
}

export default Row