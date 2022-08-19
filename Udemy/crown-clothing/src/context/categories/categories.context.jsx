import { createContext , useEffect, useState } from 'react';

import {  getCategoriesAndDocuments  } from '../../utils/firebase/firebase.utils'
//  addCollectionAndDocuments ,
// import SHOP_DATA from '../../shop-data';

export const CategoriesContext = createContext({
    categoriesMap : {}
});

export const CategoriesProvider = ({ children }) => {
    const [categoriesMap, setCategories] = useState({});
    
    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            console.log(categoryMap);
            setCategories(categoryMap);
        }

        getCategoriesMap();
        // addCollectionAndDocuments('categories' , SHOP_DATA);
    } , []);


    const value = { categoriesMap }
    return (
        <CategoriesContext.Provider value={value}>
            {children}
        </CategoriesContext.Provider>
    )
}