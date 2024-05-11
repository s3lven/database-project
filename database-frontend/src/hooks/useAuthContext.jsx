import { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext.jsx'

// Custom Hook
export function useAuthContext() {
    const context = useContext(AuthContext)
    if(!context) {
        throw new Error(
            "useAuthContext must be used within a AuthContextProvider"
        )
    }

    return context
}
