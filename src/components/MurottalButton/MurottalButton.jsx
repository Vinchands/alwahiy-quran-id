import { useState, useRef, useContext, useEffect } from 'react'
import { ChapterContext } from '@contexts/ChapterContext'
import { CurrentAudioContext } from '@contexts/CurrentAudioContext'
import './MurottalButton.css'

export default function MurottalButton({ verse }) {
    
    // * Global context(s)
    const { ayat } = useContext(ChapterContext)
    const { currentPlayedAudio, setCurrentPlayedAudio } = useContext(CurrentAudioContext)
    
    // * Audio related state(s)
    const qoriId = useRef(localStorage.getItem('qoriId'))
    const [isAudioPlaying, setIsAudioPlaying] = useState(verse.nomorAyat === currentPlayedAudio.playingVerse)
    
    async function startMurottal() {
        
        // * If
        if (((isAudioPlaying || currentPlayedAudio.playingVerse === verse.nomorAyat) && currentPlayedAudio.audio) || (currentPlayedAudio.audio && currentPlayedAudio.playingVerse !== verse.nomorAyat)) {
            currentPlayedAudio.audio.pause()
            setIsAudioPlaying(false)
            setCurrentPlayedAudio({
                playingVerse: 0,
                audio: null,
            })
            return
        }
    
        // Untuk memutar audio bergilir
        for (const item of ayat.slice(verse.nomorAyat - 1)) {
            const audio = new Audio(item.audio[qoriId.current])
            
            // * Waiting for the audio to be loaded
            await new Promise((resolve) => {
                audio.onloadeddata = () => {
                    audio.play()
                    
                    setIsAudioPlaying(true)
                    setCurrentPlayedAudio({
                        playingVerse: item.nomorAyat,
                        audio: audio,
                    })
                }
    
                // * After the audio has been finished playing
                audio.onended = () => {
                    setIsAudioPlaying(false)
                    setCurrentPlayedAudio({
                        playingVerse: 0,
                        audio: null,
                    })
                    resolve()
                }
            })
        }
    }
    
    useEffect(() => {
        document.querySelector(`#ayat${currentPlayedAudio.playingVerse}`)?.scrollIntoView(
            {
                behavior: 'smooth',
                block: 'center'
            }
        )
    }, [currentPlayedAudio])

    return (
        <button className='toolbar-item group' onClick={ startMurottal }>
            <i className={ currentPlayedAudio.playingVerse === verse.nomorAyat? 'bi bi-pause' : 'bi bi-play' }></i>
            <div className='item-tooltip'>{ currentPlayedAudio.playingVerse === verse.nomorAyat? 'Hentikan' : 'Dengarkan' }</div>
        </button>
    )
}
