import Bismillah from '@components/Bismillah/Bismillah'
import Verse from '@components/Verse/Verse'

export default function FilterableVerseList({ chapter, searchQuery, transliteration, translation }) {
    
    const filteredVerses = chapter.ayat
        .filter(
            verse => verse.teksIndonesia.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .map(verse =>
            <Verse key={ verse.nomorAyat } 
                chapter={ chapter } 
                verse={ verse } 
                transliteration={ transliteration } 
                translation={ translation } />
        )
    
    const fullVerses = chapter.ayat.map(verse => <Verse key={ verse.nomorAyat } chapter={ chapter } verse={ verse } transliteration={ transliteration } translation={ translation } /> )
    
    return (
        <div className='filterable-verses'>
            {
                searchQuery &&
                <h1 className='search-result'>
                    Ditemukan { filteredVerses.length } ayat dengan <span className='font-extrabold text-xl'>&quot;{ searchQuery }&quot;</span>
                </h1>
            }
            <Bismillah chapterNumber={ chapter.nomor } />
            { filteredVerses.length > 0? filteredVerses : fullVerses }
        </div>
    )
}