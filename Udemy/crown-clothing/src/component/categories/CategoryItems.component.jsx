import './categories-items.style.scss'

export const CategoryItems = ({ categories }) =>{
    const { imageUrl , category } = categories;
    return(
        <div className="category-container">
        <div className="background-image" 
             style={{backgroundImage : `url(${imageUrl})`}}
             />
        <div className="category-body-container">
            <h2>{ category }</h2>
            <p>Shop Now</p>
        </div>
      </div>
    )
}