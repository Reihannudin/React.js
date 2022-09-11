import  { useState, useEffect } from 'react';
import { UserAuth } from '../../context/auth-context.context';
import { db } from '../../utils/firebase.util';
import { updateDoc, doc, onSnapshot } from 'firebase/firestore';

import { AiOutlineClose } from 'react-icons/ai';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

import './savedshow.style.scss'

export const Savedshows = () => {
    
    const [movies , setMovies] = useState([])
    const { user } = UserAuth()

    const slideLeft = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft - 500;
      };
    const slideRight = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 500;
      };


    useEffect(() => {
      onSnapshot(doc(db, 'users', `${user?.email}`), (doc) => {
        setMovies(doc.data()?.savedShows);
      });
    }, [user?.email]);
    
    const movieRef = doc(db, 'users', `${user?.email}`)
    const deleteShow = async (passedID) => {
        try {
          const result = movies.filter((item) => item.id !== passedID)
          await updateDoc(movieRef, {
              savedShows: result
          })
        } catch (error) {
            console.log(error)
        }
    }
  
    return(
        <>
            <h2 className='row-title'>My Shows</h2>
            <div className='row-container'>
                <MdChevronLeft className='slider-left' size={40} onClick={slideLeft}/>
                  <div id={'slider'} className='row-content'>
                    {movies?.map((item) => (
                      <div key={item.id} className='saved-box'>
                        <div className='movie-container'>
                          <img 
                              className='movie-image'
                              src={`https://image.tmdb.org/t/p/w500/${item?.img}`}
                              alt={item?.title}
                           />
                            <div className='movie-hover'>
                            <p className='movie-title-hover'>
                                {item?.title}
                            </p>
                                <p className='heart-icon' onClick={()=> deleteShow(item.id)} ><AiOutlineClose /></p>
                            </div> 
                        </div>
                      </div>
                    ))}
                    </div>
                <MdChevronRight className='slider-right' size={40} onClick={slideRight}/>
            </div>
        </>
    )
}

