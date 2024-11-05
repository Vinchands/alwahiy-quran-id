import { createContext } from 'react'

export const CurrentAudioContext = createContext()

export function CurrentAudioProvider({ children, value }) {
    return (
        <CurrentAudioContext.Provider value={ value }>
            {children}
        </CurrentAudioContext.Provider>
    )
}
