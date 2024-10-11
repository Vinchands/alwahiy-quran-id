import HeroSection from '@components/HeroSection/HeroSection'
import SearchBar from '@components/SearchBar/SearchBar'
import logo from '@assets/alwahiy-logo-white.png'
import bg from '@assets/quran-bg.jpg'

export default function Home() {
    return (
        <>
            <h1 className='font-serif font-thin text-2xl text-center mb-5'>بسم الله الرحمن الرحيم</h1>
            <div className='mb-10 mx-auto'>
                <h1 className='font-extrabold text-2xl'>Kata Pengantar</h1>
                <p className='text-slate-300'>
                    Alhamdulillah, segala puji bagi Allah ta&apos;ala yang telah menurunkan kitab-Nya yang mulia kepada hamba-Nya sebagai cahaya petunjuk bagi seluruh umat manusia dan memberi kabar gembira kepada orang-orang yang bertakwa.
                    Sholawat serta salam semoga selalu terlimpahkan kepada utusan-Nya yang terkasihi yang telah membawakan risalah yang mulia, baginda Nabi Muhammad &apos;alaihi sholatu wassalam.
                </p>
            </div>
            <div className='relative max-w-prose text-center mx-auto'>
                <h1 className='font-uthmani font-thin text-2xl'>ٱلْحَمْدُ لِلَّهِ ٱلَّذِىٓ أَنزَلَ عَلَىٰ عَبْدِهِ ٱلْكِتَـٰبَ وَلَمْ يَجْعَل لَّهُۥ عِوَجَاۜ</h1>
                <p className='font-thin italic text-center text-slate-300 mb-3'>&quot;Segala puji bagi Allah yang telah menurunkan Kitab (Al-Qur&apos;an) kepada hamba-Nya dan Dia tidak menjadikannya bengkok&quot;</p>
                <p className='font-semibold text-slate-400'>QS. Al-Kahf 18: 1</p>
                <div className='absolute w-20 h-20 top-0 left-10 z-[-1] opacity-30 bg-cyan-700 rounded-full'></div>
                <div className='absolute w-32 h-32 top-[50px] left-[142px] z-[-1] opacity-30 bg-cyan-300 rounded-full'></div>
                <div className='absolute w-52 h-52 top-0 right-10 z-[-1] opacity-30 bg-cyan-500 rounded-full'></div>
            </div>
        </>
    )
}
