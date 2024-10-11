import { useState } from 'react'
import './SearchBar.css'

export default function SearchBar() {
    
    const [query, setQuery] = useState('')
    
    return (
        <div className='input-group'>
            <div className='input-group-icon'>
                <i className='bi bi-search'></i>
            </div>
            <input type='text' 
                name='query' 
                id='query'
                className='text-input'
                placeholder='Cari nama surah atau teks...' />
            <button className='search-button'>Cari</button>
        </div>
    )
}
