import { Link, Outlet} from 'react-router-dom'
import { Fragment , useContext} from 'react'
import { UserContext } from '../../context/user/user.context'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { signOutUser } from '../../utils/firebase/firebase.utils'
import { CartIcon } from '../../component/cart-icon/cart-icon.component'
import { CartDropdown } from '../../component/cart-dropdown/cart-dropdown.component'
import { CartContext } from '../../context/cart/cart.context'
import './navigation.style.scss'

export const Navigation = () =>{ 

    const { currentUser } = useContext(UserContext)
    const { isCartOpen } = useContext(CartContext)
    // console.log(currentUser)
 
    // const signOutHandler = async () => {
    //     await signOutUser()
    //     setCurrentUser(null);
    // }

    return(
      <Fragment>
        <div className="navigation">
            <Link className="logo-container" to="/">
                <Logo className="logo" />
            </Link>
            <div className="nav-links-container">
                <Link className="nav-links nav-text" to="/shop">
                    SHOP
                </Link>
                {currentUser ? (
                    <span className='nav-link nav-text' onClick={signOutUser}>SIGN OUT</span>
                ) : (
                    <Link className="nav-link nav-text" to="/auth">
                        SIGN IN
                    </Link>
                )}
                <CartIcon />
            </div>
            { isCartOpen && <CartDropdown />}
        </div>
        <Outlet />
      </Fragment>
    )
  }