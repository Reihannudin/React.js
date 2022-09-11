import { useState } from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { UserAuth } from '../../context/auth-context.context';
import { db } from '../../utils/firebase.util'
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';

import './movie.style.scss'

export const Movie = ({item}) => {

    const [like , setLike] = useState(false);
    const [saved, setSaved] = useState(false);
    const { user } = UserAuth();

    const movieID = doc(db , 'users' , `${user?.email}`)
    // console.log(item);  

    const savedShow = async () => {
        if(user?.email){
            setLike(!like)
            setSaved(true);
            await updateDoc(movieID, {
                savedShows : arrayUnion({
                    id: item.id,
                    title : item.title,
                    img: item?.backdrop_path
                })
            })
        } else {
            alert('Please log in to save a movie'); 
        }
    }

    return(
        <div className='movie-container'>
            <img 
                 className='movie-image'
                 src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
                 alt={item?.title}
            />
            <div className='movie-hover'>
                <p className='movie-title-hover'>
                    {item?.title}
                </p>
                <p onClick={savedShow}>
                {like ? (
                    <FaHeart className='heart-icon' />
                ) : (
                    <FaRegHeart className='heart-icon' />
                ) }
                </p>
            </div>
        </div>
    )
}