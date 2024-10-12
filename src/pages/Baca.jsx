import ChapterList from '@components/ChapterList/ChapterList'
import HeroSection from '@components/HeroSection/HeroSection'
import SearchBar from '@components/SearchBar/SearchBar'
import { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

export default function Baca(){
    
    const chapters = useLoaderData()
    // const [ chaptersList, setChaptersList ] = useState(chapters)
    const [ searchQuery, setSearchQuery ] = useState('')
    
    return (
        <>
            <HeroSection>
                <SearchBar onSearch={ setSearchQuery } />
            </HeroSection>
            <ChapterList chapters={ chapters } searchQuery={ searchQuery } />
        </>
    )
}
