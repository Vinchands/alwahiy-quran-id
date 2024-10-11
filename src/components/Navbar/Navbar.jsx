import Navigation from '@components/Navigation/Navigation'
import logo from '@assets/alwahiy-logo-white.png'
import './Navbar.css'

export default function Navbar({ children }) {
    
    return (
        <div id='site-top' className='navbar-container'>
            <div className='navbar-content'>
                <a href='/home'>
                    <img src={ logo } alt='Al-Wahy Logo' className='brand-logo' />
                </a>
                <span className='brand-text'>
                    <a href='/home' className='brand-main-title'>
                        Al-Wahiy
                    </a>
                    <span className='brand-jargon'>
                        Al-Qur&apos;an Indonesia
                    </span>
                </span>
            </div>
            <nav className='navigation'>
                <Navigation />
            </nav>
        </div>
    )
}
