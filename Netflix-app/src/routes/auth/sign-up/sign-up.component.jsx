import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../../../context/auth-context.context'

import './sign-up.style.scss'

export const SignUp = () => {

    const [email , setEmail] = useState('')
    const [ password , setPassword ] = useState('')
    const { user , signUp } = UserAuth()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
            await signUp(email , password)
            navigate('/')
        } catch(error){
            console.log(error)
        }
    }

    return(
        <div className='sign-section'>
           <img className='sign-img-banner'
                src='https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg' 
                alt='/'
            /> 
           <div className='sign-background'></div>
           <div className='sign-container'>
              <div className='sign-box'>
                 <div className='sign-content'>
                    <h1 className='sign-title'>Sign Up</h1>
                    <form className='sign-form' onSubmit={handleSubmit}>
                        <input 
                            onChange={(e) => setEmail(e.target.value)}
                            className='sign-input'
                            type='email'
                            placeholder='Email'
                            autoComplete='email'
                        />
                        <input 
                            onChange={(e) => setPassword(e.target.value)}
                            className='sign-input'
                            type='password'
                            placeholder='Password'
                            autoComplete='password'
                        />
                        <button className='sign-button'>
                            Sign Up
                        </button>
                        <div className='sign-box-footer'>
                            <p>
                                <input className='checkbox' type='checkbox'/>
                                Remember me
                            </p>
                            <p>
                                Need Help?
                            </p>
                        </div>
                        <p className='sign-p-direct'>
                            <span className='sign-ask'>
                                Already subscribed to Netflix?
                            </span>{' '}
                            <Link to='/signin'>Sign In</Link>
                        </p>
                    </form>
                 </div>
              </div>
           </div>

        </div>
    )
}