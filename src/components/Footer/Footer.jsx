import { Link } from 'react-router-dom'
import logo from '@assets/alwahiy-logo-white.png'
import './Footer.css'

export default function Footer() {
    return (
        <footer className='footer-container'>
            <div className='footer-content flex justify-between'>
                <div className='footer-brand'>
                    <img src={ logo } alt='Al-Wahiy Logo' className='logo' />
                    <span className='block'>
                        <span className='title'>
                            Al-Wahiy
                        </span>
                        <span className='jargon'>
                            Al-Qur&apos;an Indonesia
                        </span>
                    </span>
                    <span className='copyright'>
                        Copyright &copy; { new Date().getFullYear() } Vinchands.
                    </span>
                </div>
                <div className='footer-subcontainer'>
                    <nav className='footer-nav'>
                        <span className='nav-title'>Menu Utama</span>
                        <Link to='/home' className='nav-item'>Home</Link>
                        <Link to='/baca' className='nav-item'>Baca Al-Qur&apos;an</Link>
                        <Link to='/tentang' className='nav-item'>Tentang</Link>
                    </nav>
                    <nav className='footer-nav'>
                        <span className='nav-title'>Kontak Developer</span>
                        <a href='https://github.com/Vinchands' target='_blank' className='nav-item'>
                            <i className='bi bi-github'></i> Vinchands
                        </a>
                        <a href='https://facebook.com' target='_blank' className='nav-item'>
                            <i className='bi bi-facebook'></i> Kevin Chandra
                        </a>
                        <a href='mailto:kevinchandra031@gmail.com' target='_blank' className='nav-item'>
                            <i className='bi bi-envelope-fill'></i> kevinchandra031@gmail.com
                        </a>
                        <a href='https://wa.me/+6283829847234' target='_blank' className='nav-item'>
                            <i className='bi bi-whatsapp'></i> +62 838 2984 7234
                        </a>
                    </nav>
                </div>
            </div>
        </footer>
    )
}
