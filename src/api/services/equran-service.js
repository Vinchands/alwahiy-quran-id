import apiClient from '@utils/api-client'

export async function getChapters() {
    try {
        const response = await apiClient.get('/surat')
        return response.data
    }
    
    catch (error) {
        throw new Error(`Error fetching API: ${error.message}`)
    }
}

export async function getVerses(chapter) {
    try {
        const response = await apiClient.get(`/surat/${chapter}`)
        return response.data
    }
    
    catch (error) {
        throw new Error(`Error fetching API: ${error.message}`)
    }
}
