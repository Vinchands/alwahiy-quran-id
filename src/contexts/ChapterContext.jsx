import { createContext } from 'react'

export const ChapterContext = createContext()

export function ChapterProvider({ children, value }) {
    return (
        <ChapterContext.Provider value={ value }>
            { children }
        </ChapterContext.Provider>
    )
}
