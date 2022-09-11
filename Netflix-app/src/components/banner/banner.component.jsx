import axios from 'axios';
import { useState , useEffect } from 'react'
import './banner.style.scss'
import requests from '../../request'

export const Banner = () => {

    const [movies, setMovies] = useState([]);

    const movie = movies[Math.floor(Math.random() * movies.length)];
    
      useEffect(() => {
        axios.get(requests.requestTrending).then((response) => {
          setMovies(response.data.results);
        });
      }, []);
        console.log(movie);  

    const truncateString = (str , num) => {
        if(str?.length > num){
            return str.slice(0, num) + '...';
        } else {
            return str;
        }
    }

    return(
        <div className='banner-section'>
            <div className='banner-container'>
                <div className='banner-box'>
                    <img className='banner-image'
                        src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
                        // src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`}
                        
                        alt={movie?.title}
                    />
                    <div className='banner-text-box'>
                        <h1 className='banner-text-title'>{movie?.title}</h1>
                        <div className='banner-button-container'>
                            <button className='banner-button-left'>
                                Play
                            </button>
                            <button className='banner-button-right'>
                                Watch Later
                            </button>
                        </div>
                        <p className='banner-text-released'>
                            Released: {movie?.release_date}
                        </p>
                        <p className='banner-text-overview'>
                            {truncateString(movie?.overview , 150)}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}