import { useContext , Fragment } from 'react';

import { CategoryPreview } from '../../component/category-preview/category-preview.component'

import { CategoriesContext } from '../../context/categories/categories.context'

export const CategoriesPreview = () => {
    const { categoriesMap } = useContext(CategoriesContext);

    return (
        <Fragment>
            {Object.keys(categoriesMap).map((title) => {
                const products = categoriesMap[title];
                return(
                    <CategoryPreview key={title} title={title} products={products}></CategoryPreview>
                )
            })}
        </Fragment>
    )
}
