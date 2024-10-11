import './Chapter.css'

export default function Chapter({ chapter }) {
    return (
        <div className='chapter-container group'>
            <div className='chapter-body'>
                <div className='chapter-left'>
                    <span className='number'>{ chapter.nomor }</span>
                    <div className='texts'>
                        <p className='transliteration'>{ chapter.namaLatin }</p>
                        <p className='translate auto-scroll'>{ chapter.arti }</p>
                    </div>
                </div>
                <div className='chapter-right'>
                    <p className='arabic'>{ chapter.nama }</p>
                    <p className='verses-count'>{ chapter.jumlahAyat } ayat</p>
                </div>
            </div>
        </div>
    )
}
