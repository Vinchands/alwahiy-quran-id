import Navbar from '@components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '@components/Footer/Footer'

export default function Root() {
    return (
        <div className='flex flex-col min-h-screen align-bottom'>
            <Navbar />
            <div id='page' className='flex-grow p-3'>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}
