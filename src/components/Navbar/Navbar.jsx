import Navigation from '@components/Navigation/Navigation'
import { Link } from 'react-router-dom'
import logo from '@assets/alwahiy-logo-white.png'
import './Navbar.css'

export default function Navbar({ children }) {
    
    return (
        <div id='site-top' className='navbar-container'>
            <Link to='/home' className='navbar-content'>
                <img src={ logo } alt='Al-Wahy Logo' className='brand-logo' />
                <div className='brand-text'>
                    <span className='brand-main-title'>
                        Al-Wahiy
                    </span>
                    <span className='brand-jargon'>
                        Al-Qur&apos;an Indonesia
                    </span>
                </div>
            </Link>
            <nav className='navigation'>
                <Navigation />
            </nav>
        </div>
    )
}
