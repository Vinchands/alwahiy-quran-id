import Chapter from '@components/Chapter/Chapter'
import { Link } from 'react-router-dom'
import './FilterableChapterList.css'

export default function FilterableChapterList({ chapters, searchQuery }) {
    
    const filteredChapters = chapters
        .filter(
            chapter => chapter.namaLatin.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .map(
            chapter => (
                <Link key={ chapter.nomor } to={ `/baca/surah/${ chapter.nomor }` }>
                    <Chapter chapter={ chapter } />
                </Link>
            )
        )
    
    const fullChapters = chapters.map(
        (chapter) => (
            <Link key={ chapter.nomor } to={ `/baca/surah/${ chapter.nomor }` }>
                <Chapter chapter={chapter} />
            </Link>
        )
    )
    
    return (
        <>
            {
                searchQuery &&
                <h1 className='font-semibold mb-5'>
                    Ditemukan { filteredChapters.length } surah dengan <span className='font-extrabold text-lg'>&quot;{ searchQuery }&quot;</span>
                </h1>
            }
            <div className='chapter-list'>
                {
                    filteredChapters.length > 0
                    ? filteredChapters
                    : fullChapters
                }
            </div>
        </>
    )
}
