import ChapterNav from '@components/ChapterNav/ChapterNav'
import ChapterToolbar from '@components/ChapterToolbar/ChapterToolbar'
import FilterableVerseList from '@components/FilterableVerseList/FilterableVerseList'
import BackToTopButton from '@components/BackToTopButton/BackToTopButton'
import { useParams, useLoaderData } from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function BacaSurah() {
    
    // const { surah } = useParams()
    const chapter = useLoaderData()
    
    const [ searchQuery, setSearchQuery ] = useState('')
    const [ toVerse, setToVerse ] = useState(null)
    const [ showTransliteration, setShowTransliteration ] = useState(true)
    const [ showTranslation, setShowTranslation ] = useState(true)
    
    useEffect(() => {
        window.scroll({
            top: 0,
            behavior: 'instant',
        })
    }, [])
    
    function handleScrollVerse() {
        const verseElement = document.querySelector(`#ayat${toVerse}`)
        
        if (verseElement) {
            verseElement.scrollIntoView({
                behavior:'smooth',
                block: 'center'
            })
        }
    }
    
    return (
        <>
            <ChapterNav chapter={ chapter } />
            <ChapterToolbar>
                <div className='flex justify-center sm:justify-normal items-center text-slate-300 gap-3 mb-2 sm:mb-0'>
                    <button>
                        <i className='bi bi-info-circle'></i>
                    </button>
                    <div className='relative flex items-center gap-1 group'>
                        <input type='checkbox'
                            className='size-4 accent-cyan-600'
                            value={ showTransliteration }
                            onChange={ () => setShowTransliteration(!showTransliteration) }
                            checked={ showTransliteration } />
                        <label className='hidden sm:inline'>Transliterasi</label>
                        <label className='sm:hidden'>
                            <i className='bi bi-type'></i>
                        </label>
                        <div className='absolute top-10 opacity-0 text-sm text-nowrap bg-slate-700 rounded p-2 transition-opacity ease-linear duration-300 pointer-events-none group-hover:opacity-100'>Transliterasi</div>
                    </div>
                    <div className='relative flex items-center gap-1 group'>
                        <input type='checkbox' 
                            className='size-4 accent-cyan-600'
                            value={ showTranslation }
                            onChange={ () => setShowTranslation(!showTranslation) }
                            checked={ showTranslation } />
                        <label className='hidden sm:inline'>Terjemahan</label>
                        <label className='sm:hidden'>
                            <i className='bi bi-translate'></i>
                        </label>
                        <div className='absolute top-10 opacity-0 text-sm text-nowrap bg-slate-700 rounded p-2 transition-opacity ease-linear duration-300 pointer-events-none group-hover:opacity-100'>Terjemahan</div>
                    </div>
                </div>
                <div className='flex justify-center sm:justify-normal gap-1'>
                    <input type='text' className='max-w-44 bg-slate-800 rounded px-2 py-1 focus:outline-none' placeholder='Cari teks...' 
                        value={ searchQuery } onChange={ e => setSearchQuery(e.target.value) }/>
                    <input type='number' className='max-w-28 bg-slate-800 rounded px-2 py-1 focus:outline-none' placeholder={ `Ayat (1-${chapter.jumlahAyat})` }
                        value={ toVerse } onChange={ e => setToVerse(e.target.value) } />
                    <button 
                        className='text-sm text-slate-100 bg-cyan-800 rounded p-2 hover:bg-cyan-700'
                        onClick={ handleScrollVerse }>Pergi</button>
                </div>
            </ChapterToolbar>
            <FilterableVerseList 
                chapter={ chapter } 
                toVerse={ toVerse } 
                searchQuery={ searchQuery } 
                transliteration={ showTransliteration } 
                translation={ showTranslation } />
            <BackToTopButton />
        </>
    )
}