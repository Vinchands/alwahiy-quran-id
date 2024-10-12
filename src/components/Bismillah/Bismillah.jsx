import './Bismillah.css'

export default function Bismillah({ chapterNumber }) {
    
    return <>
        {
            (chapterNumber !== 1 && chapterNumber !== 9) && (
                <div className='bismillah-container'>
                    <h1 className='font-uthmani arabic'>بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ</h1>
                    <p className='translation'>Dengan nama Allah yang Maha Pengasih, Maha Penyayang.</p>
                </div>
            )
        }
    </>
}
