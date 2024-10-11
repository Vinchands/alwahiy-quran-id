import CopyButton from '@components/CopyButton/CopyButton';
import { useState } from 'react'
import './Verse.css'

function arabicNumerals(number) {
    const arabicNumbers = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
    return number.toString().split('').map((digit) => arabicNumbers[parseInt(digit)]).join('');
}

export default function Verse({ chapter, verse, transliteration, translation }) {
    
    // const [transliteration, setTransliteration] = useState(true)
    // const [translation, setTranslation] = useState(true)
    
    const dedent = str => str.replace(/^\s+/gm, '')
    const copyableText = dedent(`
        ${verse.teksArab}
        ${verse.teksIndonesia}
        (QS. ${chapter.namaLatin} ${chapter.nomor}: ${verse.nomorAyat})
    `)
    
    return (
        <div id={ `ayat${verse.nomorAyat}` } className='verse-container'>
            <div className='verse-body'>
                <p className='verse-script font-uthmani'>{ verse.teksArab } { arabicNumerals(verse.nomorAyat) }</p>
                { transliteration && <p className='verse-transliteration'>{ verse.nomorAyat }. { verse.teksLatin }</p> }
                { translation && <p className='verse-translation'>{ verse.nomorAyat }. { verse.teksIndonesia }</p> }
            </div>
            <div className='verse-toolbar'>
                <CopyButton text={ copyableText } />
                <button className='toolbar-item group'>
                    <i className='bi bi-card-text'></i>
                    <div className='item-tooltip'>Tafsir</div>
                </button>
                <button className='toolbar-item group'>
                    <i className='bi bi-play'></i>
                    <div className='item-tooltip'>Dengarkan</div>
                </button>
            </div>
        </div>
    )
}
