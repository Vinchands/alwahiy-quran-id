import { useState, useEffect } from 'react'
import './ChapterToolbar.css'

export default function ChapterToolbar({ children }) {

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        if (!JSON.parse(localStorage.getItem('showToolbar'))) {
            const handleScroll = () => setIsScrolled(window.scrollY > 170)
            window.onscroll = handleScroll
        }
    }, [])

    return (
        <div className={ `chapter-toolbar ${isScrolled? 'opacity-20' : 'opacity-100'}` }>
            <div className='toolbar-body'>
                {children}
            </div>
        </div>
    )
}
