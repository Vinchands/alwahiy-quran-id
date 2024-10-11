import { useState, useEffect } from 'react';
import './BackToTopButton.css';

export default function BackToTopButton() {
    const [isVisible, setIsVisible] = useState(false)
    
    function toggleVisibility() {
        if (window.scrollY > 100) setIsVisible(true)
        else setIsVisible(false)
    }
    
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility)
        return () => {
            window.removeEventListener('scroll', toggleVisibility)
        }
    }, [])

    return (
        <>
            {
                isVisible &&
                <button onClick={ scrollToTop } className='back-to-top group'>
                    <i className='bi bi-chevron-up'></i>
                    <div className='back-to-top-tooltip'>Kembali ke Atas</div>
                </button>
            }
        </>
    )
}
