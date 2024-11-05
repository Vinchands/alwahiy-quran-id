import Bismillah from '@components/Bismillah/Bismillah'
import Verse from '@components/Verse/Verse'
import { ChapterContext } from '@contexts/ChapterContext'
import { useContext } from 'react'

export default function FilterableVerseList({ searchQuery }) {
    
    const chapter = useContext(ChapterContext)
    
    // * Verses and tafsirs related state(s)
    const { ayat, tafsir } = chapter
    const versesWithTafsirs = ayat.map((verse, i) => ({ ayat: verse, tafsir: tafsir[i] }))
    
    // * Filtered verses based on search query, and render them accordingly.
    const filtered = versesWithTafsirs
        .filter(
            ({ ayat }) => ayat.teksIndonesia.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .map(({ ayat, tafsir }, i) =>
            <Verse key={ i } verse={ ayat } tafsir={ tafsir } />
        )
    
    // * Render all verses if no search query or result available.
    const full = versesWithTafsirs.map(({ ayat, tafsir }, i) =>
        <Verse key={ i } verse={ ayat } tafsir={ tafsir } />
    )
    
    return (
        <div className='filterable-verses'>
            {
                searchQuery &&
                <h1 className='search-result'>
                    Ditemukan { filtered.length } ayat dengan <span className='font-extrabold text-xl'>&quot;{ searchQuery }&quot;</span>
                </h1>
            }
            <Bismillah chapterNumber={ chapter.nomor } />
            { filtered.length > 0? filtered : full }
        </div>
    )
}
