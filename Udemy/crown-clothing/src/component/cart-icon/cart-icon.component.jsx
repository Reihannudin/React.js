import { useContext } from 'react'

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import './cart-icon.style.scss'

import { CartContext } from '../../context/cart/cart.context'

export const CartIcon = () => {

    const {isCartOpen , setIsCartOpen , cartCount } = useContext(CartContext);

    const toggleCartIsOpen = () => setIsCartOpen(!isCartOpen)

    return(
        <div className='cart-icon-container' onClick={toggleCartIsOpen}>
            <ShoppingIcon />
            <span className="item-count">{cartCount}</span>
        </div>
    )
}