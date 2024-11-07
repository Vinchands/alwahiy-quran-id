import ChapterNav from '@components/ChapterNav/ChapterNav'
import ChapterToolbar from '@components/ChapterToolbar/ChapterToolbar'
import FilterableVerseList from '@components/FilterableVerseList/FilterableVerseList'
import BackToTopButton from '@components/BackToTopButton/BackToTopButton'
import CopyButton from '@components/CopyButton/CopyButton'
import Modal, { ModalHeader, ModalBody, ModalFooter } from '@components/Modal/Modal'
import { useNavigate, useLoaderData, useParams } from 'react-router-dom'
import { ChapterProvider } from '@contexts/ChapterContext'
import { CurrentAudioProvider } from '../contexts/CurrentAudioContext'
import { useState, useEffect } from 'react'
import { getChapters } from '@services/equran-service'

export default function BacaSurah() {
    
    const chapter = useLoaderData()
    const { surah } = useParams()
    const navigate = useNavigate()
    
    // * Audio related state(s)
    const [currentPlayedAudio, setCurrentPlayedAudio] = useState({
        playingVerse: 0,
        audio: null
    })
    
    // * Chapters list related state(s)
    const [chapterList, setChapterList] = useState([])
    
    // * Toolbar related state(s)
    const [ searchQuery, setSearchQuery ] = useState('')
    const [ toVerse, setToVerse ] = useState('')
    
    // * Modal related state(s)
    const [ isModalOpen, setIsModalOpen ] = useState(false)
    const closeModal = () => setIsModalOpen(false)
    const openModal = () => setIsModalOpen(true)
    
    // * Help user scrolls to the certain verse
    function handleScrollVerse() {
        const verseElement = document.querySelector(`#ayat${toVerse}`)
        
        if (verseElement) {
            verseElement.scrollIntoView({
                behavior:'smooth',
                block: 'center'
            })
        }
    }
    
    useEffect(() => {
        document.title = `Al-Wahiy - ${chapter.namaLatin}`
        
        // * Fetch chapters list
        async function foo() {
            const { data } = await getChapters()
            setChapterList(data)
        }
        
        foo()
        
        // * Scroll automaticaly to the top of the screen
        window.scroll({
            top: 0,
            behavior: 'instant',
        })
    }, [chapter])
    
    // * Chapter info
    const chapterInfo = `${chapter.nama}\n${chapter.namaLatin}\nSurah ke-${chapter.nomor}\n${chapter.tempatTurun === 'Mekkah'? 'Makkiyah' : 'Madaniyah'}\n\n${chapter.deskripsi}`
    
    return (
        <div className='p-3'>
            <ChapterNav chapter={ chapter } />
            <ChapterToolbar>
                <div className='flex justify-center sm:justify-normal items-center text-slate-300 gap-x-3 mb-2 sm:mb-0'>
                    <select name='chapter' id='chapter' className='bg-slate-800 rounded px-3 py-2 focus:outline-none' value={ chapter.nomor } onChange={ e => navigate(`/baca/surah/${e.target.value}`) }>
                        {
                            chapterList.map((chap, i) =>
                                <option key={ i } value={ chap.nomor }>
                                    { chap.nomor }. { chap.namaLatin }
                                </option>
                            )
                        }
                    </select>
                    <button onClick={ openModal } className='relative group'>
                        <i className='bi bi-info-circle'></i>
                        <div className='absolute top-12 sm:top-10 left-1/2 transform -translate-x-1/2 opacity-0 text-sm text-nowrap bg-slate-700 rounded p-2 transition-opacity ease-linear duration-300 pointer-events-none  group-hover:opacity-100'>Info Surah</div>
                    </button>
                </div>
                <div className='flex justify-center sm:justify-normal gap-1'>
                    <input type='text' 
                        className='max-w-44 bg-slate-800 rounded px-2 py-1 focus:outline-none' placeholder='Cari teks...' 
                        value={ searchQuery } 
                        onChange={ e => setSearchQuery(e.target.value) } />
                    <input type='number' 
                        className='max-w-28 bg-slate-800 rounded px-2 py-1 focus:outline-none' placeholder={ `Ayat (1-${chapter.jumlahAyat})` }
                        value={ toVerse } 
                        onChange={ e => setToVerse(e.target.value) } 
                        onKeyDown={ e => { if (e.key === 'Enter') handleScrollVerse() } } />
                    {
                        toVerse &&
                        <button className='text-sm text-slate-100 bg-cyan-800 rounded p-2 hover:bg-cyan-700' onClick={ handleScrollVerse }>
                            <span className='hidden sm:inline'>Pergi</span>
                            <i className='bi bi-arrow-return-left sm:hidden'></i>
                        </button>
                    }
                </div>
            </ChapterToolbar>
            <Modal isOpen={ isModalOpen } onClose={ closeModal }>
                <ModalHeader>
                    <h1 className='font-extrabold text-xl'>
                        <i className='bi bi-info-circle'></i> Info Surah
                    </h1>
                </ModalHeader>
                <ModalBody>
                    <div className='sm:flex sm:gap-5'>
                        <div className='shrink-0 text-center mb-5 sm:mb-0'>
                            <h1 className='font-uthmani text-4xl mb-3'>{ chapter.nama }</h1>
                            <h2 className='font-extrabold'>{ chapter.namaLatin }</h2>
                            <h3 className='font-semibold text-slate-400'>{ chapter.arti }</h3>
                            <h3 className='text-sm'>{ chapter.jumlahAyat } ayat</h3>
                            <h3 className='text-sm'>{ chapter.tempatTurun === 'Mekah'? 'Makkiyah' : 'Madaniyah' }</h3>
                        </div>
                        <div className='grow' dangerouslySetInnerHTML={{ __html: chapter.deskripsi }}></div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <button className='font-semibold bg-cyan-700 rounded p-2 transition-all ease-linear duration-100 hover:bg-cyan-600' onClick={ closeModal }>Tutup</button>
                    <CopyButton text={ chapterInfo.replace(/<[^>]*>/g, '') } />
                </ModalFooter>
            </Modal>
            <ChapterProvider value={ chapter }>
                <CurrentAudioProvider value={{ currentPlayedAudio, setCurrentPlayedAudio }}>
                    <FilterableVerseList chapter={ chapter } searchQuery={ searchQuery } />
                </CurrentAudioProvider>
            </ChapterProvider>
            <BackToTopButton />
        </div>
    )
}