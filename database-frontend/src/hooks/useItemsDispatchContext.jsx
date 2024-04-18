import { useContext } from 'react'
import { ItemsDispatchContext } from '../contexts/ItemsContext.jsx'

// Custom Hook
export function useItemsDispatchContext() {
    const context = useContext(ItemsDispatchContext)
    if(!context) {
        throw new Error(
            "useItemsDispatchContext must be used within a ItemsDispatchContextProvider"
        )
    }

    return context
}
