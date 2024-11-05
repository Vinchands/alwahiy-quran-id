import CopyButton from '@components/CopyButton/CopyButton'
import MurottalButton from '@components/MurottalButton/MurottalButton'
import Modal, { ModalHeader, ModalBody, ModalFooter } from '@components/Modal/Modal'
import { ChapterContext } from '@contexts/ChapterContext'
import { useRef, useState, useContext } from 'react'
import './Verse.css'

function arabicNumerals(number) {
    const arabicNumbers = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
    return number.toString().split('').map((digit) => arabicNumbers[parseInt(digit)]).join('');
}

export default function Verse({ verse, tafsir }) {
    
    const chapter = useContext(ChapterContext)
    
    // * Toggle visibility of transliteration and translation
    const showTransliteration = useRef(JSON.parse(localStorage.getItem('showTransliteration')))
    const showTranslation = useRef(JSON.parse(localStorage.getItem('showTranslation')))
    
    // * Modal related state(s)
    const [tafsirModalOpen, setTafsirModalOpen] = useState(false)
    const toggleTafsirModal = () => setTafsirModalOpen(prev => !prev)
    
    // * Clean up text whitespaces and indentations
    const dedent = str => str.replace(/^\s+/gm, '')
    
    // * Copyable texts for verse and tafsir
    const copyableVerse = dedent(`
        ${verse.teksArab}
        ${verse.teksIndonesia}
        (QS. ${chapter.namaLatin} ${chapter.nomor}: ${verse.nomorAyat})
    `)
    
    const copyableTafsir = `Tafsir QS. ${chapter.namaLatin} ${chapter.nomor}: ${verse.nomorAyat}\n\n${tafsir.teks}`
    
    return (
        <>
            <div id={ `ayat${verse.nomorAyat}` } className='verse-container'>
                <div className='verse-body'>
                    <p className='verse-script font-uthmani'>{ verse.teksArab } { arabicNumerals(verse.nomorAyat) }</p>
                    { showTransliteration.current && <p className='verse-transliteration'>{ verse.nomorAyat }. { verse.teksLatin }</p> }
                    { showTranslation.current && <p className='verse-translation'>{ verse.nomorAyat }. { verse.teksIndonesia }</p> }
                </div>
                <div className='verse-toolbar'>
                    <CopyButton text={ copyableVerse } />
                    <button className='toolbar-item group' onClick={ toggleTafsirModal }>
                        <i className='bi bi-card-text'></i>
                        <div className='item-tooltip'>Tafsir</div>
                    </button>
                    <MurottalButton verse={ verse } />
                </div>
            </div>
            <Modal isOpen={ tafsirModalOpen } onClose={ toggleTafsirModal }>
                <ModalHeader>
                    <h1 className='font-extrabold text-xl'>Tafsir</h1>
                    <h3 className='font-semibold text-slate-400'>QS. { chapter.namaLatin } { chapter.nomor }: { verse.nomorAyat }</h3>
                </ModalHeader>
                <ModalBody>
                    <div dangerouslySetInnerHTML={{ __html: tafsir.teks.replace(/\n/g, '<br />') }} />
                </ModalBody>
                <ModalFooter>
                    <button className='font-semibold bg-cyan-700 rounded p-2 transition-all ease-linear duration-100 hover:bg-cyan-600' onClick={ toggleTafsirModal }>Tutup</button>
                    <CopyButton text={ copyableTafsir } />
                </ModalFooter>
            </Modal>
        </>
    )
}
