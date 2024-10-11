import Chapter from '@components/Chapter/Chapter'
import ChapterList from '@components/ChapterList/ChapterList'
import HeroSection from '@components/HeroSection/HeroSection'
import SearchBar from '@components/SearchBar/SearchBar'
import { useState, useEffect } from 'react'
import { Link, useLoaderData } from 'react-router-dom'

export default function Baca(){
    
    const chapters = useLoaderData()
    
    return (
        <>
            <HeroSection>
                <SearchBar />
            </HeroSection>
            <ChapterList>
            {
                chapters.map((chapter) => (
                    <Link key={ chapter.nomor } to={ `/baca/surah/${ chapter.nomor }` }>
                        <Chapter chapter={chapter} />
                    </Link>
                ))
            }
            </ChapterList>
        </>
    )
}
