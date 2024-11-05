import { NavLink } from 'react-router-dom'
import './Navigation.css'

export default function Navigation() {
    
    function getNavLinkClass({ isActive }) {
        const className = `nav-item ${isActive? 'nav-item-active' : ''} group`
        return className
    }
    
    return (
        <>
            <NavLink 
                to='/home'
                className={ getNavLinkClass }>
                <i className='bi bi-house-fill nav-item-icon'></i>
                <span className='nav-item-text'>Home</span>
                <div className='nav-item-tooltip'>Home</div>
            </NavLink>
            <NavLink 
                to='/baca'
                className={ getNavLinkClass }>
                <i className='bi bi-book-half nav-item-icon'></i>
                <span className='nav-item-text'>Baca Al-Qur&apos;an</span>
                <div className='nav-item-tooltip'>Baca Al-Qur&apos;an</div>
            </NavLink>
            <NavLink 
                to='/tentang'
                className={ getNavLinkClass }>
                <i className='bi bi-info-circle nav-item-icon'></i>
                <span className='nav-item-text'>Tentang</span>
                <div className='nav-item-tooltip'>Tentang</div>
            </NavLink>
            <NavLink 
                to='/pengaturan'
                className={ getNavLinkClass }>
                <i className='bi bi-gear-fill nav-item-icon'></i>
                <span className='nav-item-text'>Pengaturan</span>
                <div className='nav-item-tooltip last-item'>Pengaturan</div>
            </NavLink>
        </>
    )
}