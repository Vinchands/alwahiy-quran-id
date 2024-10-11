import axios from 'axios'

const BASEURL = import.meta.env.VITE_API_BASEURL

const apiClient = axios.create({
    baseURL: BASEURL,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
})

apiClient.interceptors.response.use(
    response => response,
    error => {
        console.error('API Error:', error)
        return Promise.reject(error)
    }
)

export default apiClient
