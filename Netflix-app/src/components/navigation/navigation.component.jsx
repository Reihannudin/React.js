import {Link , useNavigate} from 'react-router-dom'
import { UserAuth } from '../../context/auth-context.context'
import './navigation.style.scss'

export const Navigation = () => {

    const { user, logOut } = UserAuth();
    const navigate = useNavigate();
    // console.log(user.email)
  
    const handleLogout = async () => {
        try {
          await logOut();
          navigate('/');
        } catch (error) {
          console.log(error);
        }
      };

    return(
        <div className='navigation-container'>
            <Link className='navigation-icon-container' to='/'>
                <h1 className='navigation-icon'>
                    NETFLIX
                </h1>
            </Link>
            {user?.email ?(
                <div className='button-container'>
                    <Link to='/account'>
                        <button className='button-left'>
                            Account
                        </button>
                    </Link>
                        <button   onClick={handleLogout} className='button-right'>
                            Logout
                        </button>
                </div>
            ) : (
                <div className='button-container'>
                    <Link to='/signin'>
                        <button className='button-left'>
                            Sign In
                        </button>
                    </Link>
                    <Link to='/signup'>
                        <button className='button-right'>
                            Sign Up
                        </button>
                    </Link>
                </div>
            )}
          
        </div>
    )
}