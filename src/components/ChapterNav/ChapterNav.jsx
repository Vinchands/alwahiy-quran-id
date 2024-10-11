import { Link } from 'react-router-dom'
import './ChapterNav.css'

export default function ChapterNav({ chapter }) {
    
    const chapterPrev = chapter.suratSebelumnya
    const chapterNext = chapter.suratSelanjutnya
    
    return (
        <>
            <div className='chapter-nav'>
                <nav className='chapter-nav-container'>
                    {
                        chapterPrev &&
                        <Link className='chapter-prev-next group' to={ `/baca/surah/${chapterPrev.nomor}` }>
                            <i className='bi bi-chevron-compact-left'></i>
                            <div className='hidden sm:block'>
                                <h1 className='font-serif font-light text-xl'>{ chapterPrev.nama }</h1>
                                <h3 className='text-xs text-slate-400'>
                                    { chapterPrev.nomor }. { chapterPrev.namaLatin }
                                </h3>
                            </div>
                            <div className='tooltip-prev'>Surah Sebelumnya</div>
                        </Link>
                    }
                    <div className='chapter-name grow text-center'>
                        <h1 className='font-serif font-light text-3xl'>{ chapter.nama }</h1>
                        <h3 className='font-bold text-sm text-slate-400'>
                            { chapter.nomor }. { chapter.namaLatin }
                        </h3>
                    </div>
                    {
                        chapterNext &&
                        <Link className='chapter-prev-next group' to={ `/baca/surah/${chapterNext.nomor}` }>
                            <div className='hidden sm:block'>
                                <h1 className='font-serif font-light text-xl'>{ chapterNext.nama }</h1>
                                <h3 className='text-xs text-slate-400'>
                                    { chapterNext.nomor }. { chapterNext.namaLatin }
                                </h3>
                            </div>
                            <i className='bi bi-chevron-compact-right'></i>
                            <div className='tooltip-next'>Surah Berikutnya</div>
                        </Link>
                    }
                </nav>
            </div>
        </>
    )
}
