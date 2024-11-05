import { useState, useEffect } from 'react'
import SwitchButton from '@components/SwitchButton/SwitchButton'

export default function Pengaturan() {
    
    const toolbar = JSON.parse(localStorage.getItem('showToolbar'))
    const transliteration = JSON.parse(localStorage.getItem('showTransliteration'))
    const translation = JSON.parse(localStorage.getItem('showTranslation'))
    
    const [qoriId, setQoriId] = useState(localStorage.getItem('qoriId'))
    const [showToolbar, setShowToolbar] = useState(toolbar)
    const [showTransliteration, setShowTransliteration] = useState(transliteration)
    const [showTranslation, setShowTranslation] = useState(translation)
    
    function handleQoriSelection(e) {
        setQoriId(e.target.value)
    }
    
    function toggleToolbar() {
        setShowToolbar(prev => !prev)
    }
    
    function toggleTransliteration() {
        setShowTransliteration(prev => !prev)
    }
    
    function toggleTranslation() {
        setShowTranslation(prev => !prev)
    }
    
    function resetSettings() {
        localStorage.setItem('qoriId', '01')
        localStorage.setItem('showToolbar', JSON.stringify(false))
        localStorage.setItem('showTransliteration', JSON.stringify(true))
        localStorage.setItem('showTranslation', JSON.stringify(true))
        setQoriId('01')
        setShowTransliteration(true)
        setShowTranslation(true)
    }
    
    useEffect(() => {
        localStorage.setItem('qoriId', qoriId)
        localStorage.setItem('showToolbar', JSON.stringify(showToolbar))
        localStorage.setItem('showTransliteration', JSON.stringify(showTransliteration))
        localStorage.setItem('showTranslation', JSON.stringify(showTranslation))
    }, [qoriId, showToolbar, showTransliteration, showTranslation])
    
    return (
        <div className='p-3'>
            <div className='max-w-[1000px] mx-auto'>
                <h1 className='font-extrabold text-2xl text-slate-300 mb-3'>
                    <i className='bi bi-gear-fill'></i> Pengaturan
                </h1>
                <hr className='mb-5' />
                <flex className='flex justify-between items-center mb-5'>
                    <span className='block sm:inline font-bold'>Qori&apos; Murottal</span>
                    <select name='qori' id='qori-selection' className='font-light bg-slate-700 rounded px-3 py-2 focus:outline-none' value={ qoriId } onChange={ e => handleQoriSelection(e) }>
                        <option value='01'>Abdullah Al-Juhany</option>
                        <option value='02'>Abdul Muhsin Al-Qasim</option>
                        <option value='03'>Abdurrahman As-Sudais</option>
                        <option value='04'>Ibrahim Al-Dossary</option>
                        <option value='05'>Misyari Rasyid Al-Afasy</option>
                    </select>
                </flex>
                <div className='flex justify-between items-center mb-5'>
                    <div className='block'>
                        <p className='block sm:inline font-bold'>Tampilkan Toolbar</p>
                        <p className='block font-semibold text-sm text-slate-400'>Toolbar akan terus tampil meskipun discroll.</p>
                    </div>
                    <SwitchButton isChecked={ showToolbar } onCheck={ toggleToolbar } />
                </div>
                <div className='flex justify-between items-center mb-5'>
                    <div className='block'>
                        <p className='block sm:inline font-bold'>Tampilkan Transliterasi</p>
                        <p className='block font-semibold text-sm text-slate-400'>Alih aksara Arab-Latin oleh Kemenag</p>
                    </div>
                    <SwitchButton isChecked={ showTransliteration } onCheck={ toggleTransliteration } />
                </div>
                <div className='flex justify-between items-center mb-5'>
                    <span className='block sm:inline font-bold'>Tampilkan Terjemahan</span>
                    <SwitchButton isChecked={ showTranslation } onCheck={ toggleTranslation } />
                </div>
                <div className='flex justify-end mt-20'>
                    <button className='px-4 py-2 bg-slate-600 text-white rounded p-3 transition-all ease-linear duration-300 hover:bg-slate-500' onClick={ resetSettings }>Reset Pengaturan</button>
                </div>
            </div>
        </div>
    )
}
