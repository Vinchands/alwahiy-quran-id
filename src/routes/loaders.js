import { getChapters, getVerses, getTafsirs } from '../api/services/equran-service'

export async function chaptersLoader() {
    const { data } = await getChapters()
    return data
}

export async function versesLoader({ params }) {
    const { surah } = params
    const { data } = await getVerses(surah)
    return data
}

export async function tafsirsLoader({ params }) {
    const { surah } = params
    const { data } = await getTafsirs(surah)
    return data
}

export async function versesWithTafsirsLoader({ params }) {
    const { surah } = params
    const verses = await getVerses(surah)
    const tafsirs = await getTafsirs(surah)
    return { ...verses.data, ...tafsirs.data }
    
}
