import { Link } from 'react-router-dom'
import BackToTopButton from '@components/BackToTopButton/BackToTopButton'
import { useState, useEffect } from 'react'
import logo from '@assets/alwahiy-logo-white.png'
import quranAndLantern from '@assets/quran-and-lantern.png'
import quran from '@assets/quran-bg.png'
import hira from '@assets/cave-of-hira-bg.jpeg'
import kaabah from '@assets/kaabah-bg.png'
import hafiz from '@assets/hafiz-bg.png'

export default function Home() {

    // * Second section related state(s)
    const [isSpotlightActive, setIsSpotlightActive] = useState(true)
    const [cursorPosition, setCursorPosition] = useState(null)
    const [isMediumScreen, setIsMediumScreen] = useState(window.innerWidth >= 768)

    function handleMouseMove(e) {
        const { clientX, clientY } = e
        setCursorPosition({ x: clientX, y: clientY })
    }

    function handleMouseLeave() {
        setCursorPosition(null)
    }

    function handleResize() {
        setIsMediumScreen(window.innerWidth >= 768)
    }

    function toggleSpotlight() {
        setIsSpotlightActive(prev => !prev)
    }

    useEffect(() => {
        document.title = 'Al-Wahiy - Home'

        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <>
            <section className='relative w-full min-h-screen z-20 -mt-8' style={
                {
                    background: `linear-gradient(rgba(0, 0, 0, .5), rgba(30, 41, 59, 1)), url(${quran}) fixed`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                }
            } >
                <div className='min-h-screen grid grid-cols-1 items-center'>
                    <div className='flex flex-col sm:flex-row-reverse justify-around items-center sm:mt-auto sm:mb-20 p-5'>
                        <img src={logo} alt='Al-Wahiy Logo' className='w-48 sm:w-52 md:w-80' />
                        <div className='max-w-lg text-center sm:text-left'>
                            <h1 className='font-extrabold text-2xl sm:text-3xl md:text-4xl'>Al-Wahiy</h1>
                            <h3 className='font-semibold md:text-lg text-slate-400 mb-3'>Al-Qur&apos;an Indonesia</h3>
                            <article className='sm:text-lg md:text-xl mb-5'>
                                <p className='font-light text-slate-300'>
                                    Platform digital Al-Qur&apos;an terjemahan bahasa Indonesia.
                                </p>
                                <p className='font-semibold'>
                                    Jadikan hidup lebih bermakna dengan membaca, menghayati, dan mengamalkan Firman-Nya, dalam kitab-Nya yang mulia.
                                </p>
                            </article>
                            <div className='grid sm:flex gap-2'>
                                <Link to='/baca' className='font-bold bg-cyan-700 rounded-full sm:rounded p-2 transition-all ease-linear duration-100 hover:bg-cyan-600' >Baca Sekarang!</Link>
                                <Link to='/tentang' className='text-cyan-700 border-2 border-cyan-700 rounded-full sm:rounded p-2 transition-all ease-linear duration-100 hover:bg-cyan-700 hover:text-white' >Tentang</Link>
                            </div>
                        </div>
                    </div>
                    <div className='text-center text-slate-400 animate-bounce'>
                        <p>Scroll ke bawah</p>
                        <i className='bi bi-chevron-down'></i>
                    </div>
                </div>
            </section>
            <section className='relative z-0'>
                <div className='relative z-20 min-h-screen flex justify-center items-center bg-slate-800 p-5'>
                    <div className='text-center'>
                        <h1 className='font-extrabold text-4xl mb-3'>Mari berpikir sejenak...</h1>
                        <p className='text-xl text-slate-400'>Seberapa jauh kamu mengenal Al-Qur&apos;an?</p>
                    </div>
                </div>
                <div className='relative flex items-center w-full min-h-screen py-5 transition-all duration-100'
                    style={
                        {
                            background: (
                                isMediumScreen && isSpotlightActive && cursorPosition
                                ? `radial-gradient(circle at ${cursorPosition.x}px ${cursorPosition.y}px, rgba(255, 255, 255, 0) 10px, rgba(30, 41, 59, .8) 350px), `
                                : (
                                    isMediumScreen && isSpotlightActive
                                    ? `linear-gradient(rgba(30, 41, 59, 0.8), rgba(30, 41, 59, 0.8)), `
                                    : `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), `
                                )
                            ).concat(`url(${hira}) center center / cover no-repeat fixed`)
                        }
                    }
                    onMouseMove={ handleMouseMove }
                    onMouseLeave={ handleMouseLeave }>
                    <article className='z-10 max-w-[1200px] mx-auto p-5'>
                        <h1 className='font-extrabold text-2xl md:text-4xl'>Lebih Dekat Mengenal Al-Qur&apos;an</h1>
                        <h3 className='font-semibold text-slate-400 mb-5'>Kapan, di mana, dan bagaimana Al-Qur&apos;an diturunkan?</h3>
                        <p className='text-justify'>
                            Al-Qur&apos;an adalah kitab suci yang diwahyukan oleh Allah ﷻ kepada nabi dan utusan-Nya yang mulia, Rasulullah Muhammad ﷺ melalui perantara malaikat Jibril.
                            <br />Berdasarkan dalil-dalil dari Al-Qur&apos;an sendiri dan hadits-hadits yang shahih, Al-Qur&apos;an pertama kali diturunkan kepada Nabi Muhammad ﷺ di dalam Gua Hira, di sebuah bukit yang disebut Jabal Nuur (جبل نور - Bukit Cahaya), di wilayah Hijaz, dekat kota Mekkah.
                            Ayat yang pertama kali diturunkan adalah <Link className='font-semibold' to='/baca/surah/96'>5 ayat pertama dari surah Al-&apos;Alaq</Link>.
                            Hal ini terjadi pada malam Lailatul Qadr (ليلة القدر) dan kemudian peristiwa ini disebut sebagai Nuzulul Qur&apos;an (نزول القرأن).
                        </p>
                        <br />
                        <p className='text-justify'>
                            Setelah peristiwa tersebut, ayat-ayat dalam Al-Qur&apos;an selanjutnya diturunkan secara bertahap, biasanya sesuai dengan permasalahan yang dihadapi oleh Rasulullah ﷺ atau para sahabat pada saat itu.
                            Hal ini berlangsung dalam kurun waktu kurang lebih 23 tahun  hingga wafatnya Nabi Muhammad ﷺ.
                            Sebagai contoh, beberapa ayat yang diturunkan setelah peristiwa di Gua Hira adalah <Link className='font-semibold' to='/baca/surah/74'>7 ayat pertama surah Al-Muddatssir</Link>.
                            Ketujuh ayat tersebut berisi perintah agar Nabi Muhammad ﷺ bangun untuk memulai mendakwahkan Islam, karena pada saat itu beliau sedang menggigil berselimut setelah menerima wahyu pertama di Gua Hira disebabkan melihat wujud asli malaikat Jibril.
                        </p>
                        <br />
                        <p className='hidden md:inline'>
                            <button
                                className='bg-cyan-800 rounded p-2'
                                onClick={ toggleSpotlight }>
                                <i className={ isSpotlightActive? 'bi bi-lightbulb' : 'bi bi-lightbulb-fill' }></i>
                            </button>
                            { isSpotlightActive? ' Tampilkan' : ' Gelapkan' } Gambar
                        </p>
                    </article>
                </div>
                <div className='relative z-20 min-h-screen flex justify-center items-center bg-slate-800'>
                    <img src={ quranAndLantern } alt='Quran and Lantern' className='absolute top-20 opacity-50 sm:static sm:opacity-100 sm:w-64 md:w-[22rem]' />
                    <article className='relative z-30 max-w-[1000px] p-5'>
                        <h1 className='font-extrabold text-2xl md:text-4xl'>Manfaat Membaca Al-Qur&apos;an</h1>
                        <h3 className='font-semibold text-slate-400 mb-5'>Mengapa kita harus membaca Al-Qur&apos;an?</h3>
                        <p className='text-justify mb-3'>
                            Membaca Al-Qur&apos;an memiliki banyak sekali manfaat. 
                            Selain menjadi bacaan yang menambah pahala, tujuan utama diturunkannya Al-Qur&apos;an adalah sebagai pedoman hidup bagi umat manusia, yang mana dapat menuntun kita menjadi pribadi yang lebih baik dan dicintai oleh Allah.
                            Dalam Al-Qur&apos;an, terdapat banyak sekali ayat-ayat berupa hukum yang terdiri dari perintah, larangan, dan peringatan, juga terdapat berita gembira serta kisah-kisah dari umat-umat terdahulu dan orang-orang shalih yang penuh makna, dapat diteladani dan diambil hikmahnya.
                        </p>
                    </article>
                </div>
                <div className='relative z-20 min-h-screen flex justify-center items-center bg-slate-800 p-5'>
                    <article className='text-center'>
                        <p className='font-uthmani text-2xl leading-loose mb-3'>...حَتَّى جَاءَهُ الْحَقُّ وَهُوَ فِي غَارِ حِرَاءٍ فَجَاءَهُ الْمَلَكُ فَقَالَ اقْرَأْ قَالَ مَا أَنَا بِقَارِئٍ</p>
                        <p className='font-semibold'>Sampai akhirnya datang Al-Haq saat ia berada di gua Hira, malaikat datang seraya berkata: &quot;Bacalah!&quot;. Ia menjawab: &quot;Aku tak dapat membaca&quot;.</p>
                        <p className='italic text-slate-400'>HR. Bukhari - 3</p>
                    </article>
                </div>
            </section>
            <BackToTopButton />
        </>
    )
}
