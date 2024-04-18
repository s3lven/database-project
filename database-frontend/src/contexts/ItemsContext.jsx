import { createContext, useReducer } from 'react'

export const ItemsContext = createContext(null)
export const ItemsDispatchContext = createContext(null)

function itemsReducer(state, action) {
    switch (action.type) {
        case 'SET_ITEMS': 
            return {
                items: action.payload,
                isLoading: false
            }
        case 'CREATE_ITEM': 
            return {
                items: [action.payload, ...state.items]
            }
        // case 'DELETE_ITEM': {
        //     return items.filter(item => item.id !== action.id)
        // }
        default:
            return state
    }
}

export default function ItemsProvider({ children }) {
    const [state, dispatch] = useReducer(
        itemsReducer, {
            items: [],
            isLoading: true
        }
        
    )

    return (
        <ItemsContext.Provider value={{...state}}>
            <ItemsDispatchContext.Provider value={dispatch}>
                {children}
            </ItemsDispatchContext.Provider>
        </ItemsContext.Provider>
    )
}



