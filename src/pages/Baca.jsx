import FilterableChapterList from '@components/FilterableChapterList/FilterableChapterList'
import HeroSection from '@components/HeroSection/HeroSection'
import SearchBar from '@components/SearchBar/SearchBar'
import { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'
import bg from '@assets/quran-bg.png'

export default function Baca(){
    
    const chapters = useLoaderData()
    const [ searchQuery, setSearchQuery ] = useState('')
    
    useEffect(() => {
        document.title = 'Al-Wahiy - Baca'
        
        return () => {}
    }, [])
    
    return (
        <>
            <section className='p-3' style={
                {
                    background: `linear-gradient(rgba(0, 0, 0, .5), rgba(30, 41, 59, 1)), url(${bg}) fixed`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                }
            }>
                <HeroSection>
                    <SearchBar value={ searchQuery } onSearch={ setSearchQuery } />
                </HeroSection>
            </section>
            <div className='md:max-w-[1224px] mx-auto p-3'>
                <FilterableChapterList chapters={ chapters } searchQuery={ searchQuery } />
            </div>
        </>
    )
}
