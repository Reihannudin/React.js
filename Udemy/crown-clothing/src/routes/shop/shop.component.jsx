// import SHOP_DATA from '../../shop-data.json'
import { Routes , Route } from 'react-router-dom'
// import { CategoriesContext } from '../../context/categories/categories.context'
// import { ProductCard } from '../../component/product-card/product-card.component'
import { CategoriesPreview } from '../categories-preview/categories-preview.component'
import  { Category }  from '../category/category.component'


export const Shop = () => {
    return (
      <Routes>
        <Route index element={<CategoriesPreview />} />
        <Route path=':category' element={<Category />} />
      </Routes>
    );
  };
/**
 * 
    // const { categoriesMap } = useContext(CategoriesContext)
 * 
 * {Object.keys(categoriesMap).map((title) => {
                const products = categoriesMap[title]
                return(
                    <CategoryPreview key={title} title={title} products={products} />
                )
            })}
 * 
 */

                /* <Fragment key={title}>
                    <h2 className='space-product-title'>{title}</h2>
                    <div className='products-container'>
                        {categoriesMap[title].map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </Fragment> */