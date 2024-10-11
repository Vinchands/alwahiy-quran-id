import './HeroSection.css'

export default function HeroSection({ children }) {
    
    return (
        <div className='p-3'>
            <div className='hero-container'>
                <img src='src/assets/alquranul-karim-logo.png' alt='Al-Quran Al-Karim' className='hero-image'/>
                <div className='p-3'>
                    <p className='hadith-text'>
                        &quot;Sebaik-baik kalian adalah yang mempelajari Al-Qur&apos;an dan mengajarkannya.&quot;
                    </p>
                    <div className='hadith-cite'>HR. Tirmidzi 2832</div>
                </div>
                { children }
            </div>
        </div>
    )
}
