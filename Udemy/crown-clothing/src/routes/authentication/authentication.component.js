import { SignUpForm } from '../../component/sign-up-form/sign-up.component'
import { SignInForm } from '../../component/sign-in-form/sign-in-form.component'
import './authentication.style.scss'

export const Authentication = () =>{

    return(
        <div className="authentication-container">
            <SignInForm />
            <SignUpForm />
        </div>
    )
}
