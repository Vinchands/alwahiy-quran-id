import { getChapters, getVerses } from '../api/services/equran-service'

export async function chaptersLoader() {
    const { data } = await getChapters()
    return data
}

export async function versesLoader({ params }) {
    const { surah } = params
    const { data } = await getVerses(surah)
    return data
}
