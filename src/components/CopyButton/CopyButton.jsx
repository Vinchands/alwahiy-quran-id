import { useState } from 'react'
import './CopyButton.css'

export default function CopyButton({ text }) {
    
    const [isCopied, setIsCopied] = useState(false)
    
    async function handleCopy() {
        try {
            await navigator.clipboard.writeText(text)
            setIsCopied(true)
            setTimeout(() => setIsCopied(false), 2000)
        }
        
        catch (err) {
            console.error('Gagal menyalin teks:', err)
        }
    }
    
    return (
        <button className='toolbar-item group' onClick={ handleCopy }>
            <i className={ isCopied? 'bi bi-check' : 'bi bi-copy' }></i>
            <div className='item-tooltip'>{ isCopied? 'Disalin!' : 'Salin' }</div>
        </button>
    )
}