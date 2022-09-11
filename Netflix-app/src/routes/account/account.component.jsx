
import { Savedshows } from '../../components/savedshow/savedshow.component'
import './account.style.scss'

export const Account = () => {
    return(
        <>
            <div className='account-section'>
                <img className='account-banner'
                      src='https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg'
                      alt='/'
                />
                <div className='account-place'></div>
                <div className='account-countainer'>
                    <h1 className='account-title'>My Shows</h1>
                </div>
            </div>
            <Savedshows />
        </>
    )
}