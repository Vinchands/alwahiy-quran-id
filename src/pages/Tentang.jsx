import { useEffect } from 'react'
import quran from '@assets/quran-bg.png'
import kaabah from '@assets/kaabah-bg.png'
import hafiz from '@assets/hafiz-bg.png'
import hira from '@assets/cave-of-hira-bg.jpeg'

export default function Tentang() {
    
    useEffect(() => {
        document.title = 'Al-Wahiy - Tentang'
        
        return () => {}
    }, [])
    
    return (
        <div>
            <div className="relative">
                <section className='min-h-screen flex justify-center items-center' style={
                    {
                        background: `url(${quran}) fixed`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                    }
                }>
                    <div className='text-center'>
                        <h1 className='font-semibold text-4xl'>Section</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum, perferendis?</p>
                    </div>
                </section>
                <section className='flex justify-center items-center'>
                    <div className='text-center'>
                        <h1 className='font-semibold text-4xl'>Section</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum, perferendis?</p>
                    </div>
                </section>
                <section className='min-h-screen flex justify-center items-center' style={
                    {
                        background: `url(${kaabah}) fixed`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                    }
                }>
                    <div className='text-center'>
                        <h1 className='font-semibold text-4xl'>Section</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum, perferendis?</p>
                    </div>
                </section>
                <section className='flex justify-center items-center'>
                    <div className='text-center'>
                        <h1 className='font-semibold text-4xl'>Section</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum, perferendis?</p>
                    </div>
                </section>
                {/* <section className='min-h-screen flex justify-center items-center'>
                    <div className='sticky top-[40%] text-center'>
                        <h1 className='font-semibold text-4xl'>Section 2</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum, perferendis?</p>
                    </div>
                </section> */}
                <section className='min-h-screen flex justify-center items-center' style={
                    {
                        background: `url(${hafiz}) fixed`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                    }
                }>
                    <div className='text-center'>
                        <h1 className='font-semibold text-4xl'>Section</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum, perferendis?</p>
                    </div>
                </section>
            </div>
        </div>
    )
}