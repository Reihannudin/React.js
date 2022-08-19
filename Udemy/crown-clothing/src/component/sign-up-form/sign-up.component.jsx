import { useState } from "react"
import FormInput from '../form-input/form-input.component'
import Button from '../button/button.component'
// import { UserContext } from '../../context/user/user.context'

import '../button/button.style.scss'
import '../form-input/form-input.style.scss'
import './sign-up.style.scss'

import {
    createAuthUserWithEmailAndPassword ,
    createUserDocumentFromAuth
} from '../../utils/firebase/firebase.utils'

const defaultFormFields = {
    displayName: "",
    email : "",
    password : "",
    confirmPassword : ""
};

export const SignUpForm = () =>{

    const [formFields , setFormFields] = useState(defaultFormFields);
    const { displayName , email, password, confirmPassword } = formFields;
 
    // const { setCurrentUser } = useContext(UserContext)

    // console.log(formFields);

    const resetFormFields = () => { 
        setFormFields(defaultFormFields);
    }

    const handleChange = (event) => {
        const { name , value } = event.target;

        setFormFields({...formFields , [name] : value});
    }

    const handlerSubmit = async (event) => {
        event.preventDefault();

        if(password !== confirmPassword){
            alert('password do no match')
            return;
        }         

        try{
            const { user } =  await createAuthUserWithEmailAndPassword(
                email, password
            );
            // setCurrentUser(user)
            // console.log(response);

            await createUserDocumentFromAuth(user, { displayName })
            resetFormFields()

        } catch(error){
            if(error.code === 'auth/email-already-in-use'){
                alert('Cannot create user, because email already exists')
            } else {
                 console.log('user creation encountered an error' , error)
            }
        }
           
    }

    return(
        <div className="sign-up-container">
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handlerSubmit}>
            <FormInput
              label='Display Name'
              type='text'
              required
              onChange={handleChange}
              name='displayName'
              value={displayName}
            />

            <FormInput
              label='Email'
              type='email'
              required
              onChange={handleChange}
              name='email'
              value={email}
            />

            <FormInput
              label='Password'
              type='password'
              required
              onChange={handleChange}
              name='password'
              value={password}
            />

            <FormInput
              label='Confirm Password'
              type='password'
              required
              onChange={handleChange}
              name='confirmPassword'
              value={confirmPassword}
            />

            <Button buttonType = 'inverted' type='submit'>Sign Up</Button>

            {/* <button type='submit'>Sign Up</button>  */}


                {/* <FormInput /> */}
                {/* <div className="group">

                    <label className="form-input-label">Display Name</label>
                    <input className='form-input' type='text'  required onChange={handleChange} name='displayName' value={displayName}/>

                    <label className="form-input-label">Email</label>
                    <input className='form-input' type='email' required onChange={handleChange} name='email' value={email}/>

                    <label className="form-input-label">Password</label>
                    <input className='form-input' type='password' required onChange={handleChange} name='password' value={password}/>

                    <label className="form-input-label">Confirm Password</label>
                    <input className='form-input' type='password' required onChange={handleChange} name='confirmPassword' value={confirmPassword}/> 

                    <button type='submit'>Sign Up</button> 
                </div> */}
            </form>
        </div>
    )
}
