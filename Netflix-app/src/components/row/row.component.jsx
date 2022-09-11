import axios from 'axios';
import { useEffect , useState } from 'react';
import { Movie } from '../movie/movie.component'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import './row.style.scss'

export const Row = ({title , fetchURL , rowID}) => {

    const [movies , setMovies] = useState([])

    useEffect(() =>{
        axios.get(fetchURL).then((response) => {
            setMovies(response.data.results)
        })
    } , [fetchURL])

    const slideLeft = () => {
        var slider = document.getElementById('slider' + rowID);
        slider.scrollLeft = slider.scrollLeft - 500;
      };

    const slideRight = () => {
      var slider = document.getElementById('slider' + rowID);
      slider.scrollLeft = slider.scrollLeft + 500;
    };

    return(
        <>
            <h2 className='row-title'>{title}</h2>
            <div className='row-container'>
                <MdChevronLeft className='slider-left' size={40} onClick={slideLeft}/>
                    <div id={'slider' + rowID}
                          className='row-content'>
                        {movies.map((item , id) => (
                            <Movie key={id} item={item} />
                        ))}
                    </div>
                <MdChevronRight className='slider-right' size={40} onClick={slideRight}/>
            </div>
        </>
    )
}