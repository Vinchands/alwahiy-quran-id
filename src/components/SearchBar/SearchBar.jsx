import { useState } from 'react'
import './SearchBar.css'

export default function SearchBar({ onSearch }) {
    
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
                placeholder='Cari nama surah...'
                onChange={ e => onSearch(e.target.value) } />
        </div>
    )
}
