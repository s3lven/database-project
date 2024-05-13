import { createContext, useReducer } from 'react'

export const ItemsContext = createContext(null)

function itemsReducer(state, action) {
    switch (action.type) {
        case 'SET_ITEMS': 
            return {
                items: action.payload,
            }
        case 'CREATE_ITEM': 
            return {
                items: [action.payload, ...state.items]
            }
        case 'DELETE_ITEM':
            return {
                items: state.items.filter(item => item._id !== action.payload._id)
            }
        case 'UPDATE_ITEM': {
            console.log("Updated!!!!")
            return {
                items: state.items.map(i => {
                    if (i._id === action.payload._id) {
                        return action.payload
                    } else {
                        return i
                    }
                })
            }
        }
        default:
            return state
    }
}

export default function ItemsProvider({ children }) {
    const [state, dispatch] = useReducer(itemsReducer, {
        items: null
    }    
    )

    return (
        <ItemsContext.Provider value={{...state, dispatch}}>
                {children}
        </ItemsContext.Provider>
    )
}



