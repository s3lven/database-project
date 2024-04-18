import React, { useState, useEffect } from 'react'
import axios from '../axios'
import ItemList from './ItemList'
import Filter from './Filter'
import _ from "lodash"
import { useModalContext } from '../hooks/useModalContext'
import { useItemsContext } from '../hooks/useItemsContext'
import { useItemsDispatchContext} from '../hooks/useItemsDispatchContext'

export const NewItemContext = React.createContext()

function Database() {
    const {openModal} = useModalContext()
    const state = useItemsContext()
    const dispatch = useItemsDispatchContext()

    const [filterInput, setFilterInput] = useState('')
    const [filteredData, setFilteredData] = useState([])
    // const [filter, setFilter] = useState({})

    const fetchData = async () => {
        try {
            const res = await axios.get('/items')
            setFilteredData(res.data)
            dispatch({type: 'SET_ITEMS', payload: res.data})
        } catch (err) {
            console.log(err.message)
        }
    }

    useEffect(() => {
        console.log("Grabbing items")
        axios
            .get('/items')
            .then (res => {
                setFilteredData(res.data)
                dispatch({type: 'SET_ITEMS', payload: res.data})
            })
            .catch ((err) => {
                console.log(err.message)
            })
    },[dispatch])

    useEffect(() => {
        const shouldDisplay = (item) => {
            // console.log("Item Location: ", item.location)
            let matchesSearch = item.name.toLowerCase().includes(filterInput.toLowerCase())
            // console.log("matchesSearch: ", matchesSearch)
            // let matchesLocation = (filter.locationFilter != "" ? _.some(item.location, filter.locationFilter): true)
            // console.log("matchesLocation: ", matchesLocation)
            // let matchesRequirements = (filter.requirementFilter != "" ? _.some(item.specialRequirements, filter.requirementFilter): true)
            return matchesSearch // && matchesLocation && matchesRequirements
        }

        const filteredItems = state.items.filter((item) => {
            return shouldDisplay(item)
        })

        setFilteredData(filteredItems)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filterInput])

    return (
        <>
            {/* Search Bar Code */}
            <div>
                {/* Input Element */}
                <div>
                    <input
                        type="text"
                        placeholder="Search Item Name"
                        value={filterInput}
                        onChange={(e) => {setFilterInput(e.target.value)}}
                        className="text-black text-center rounded-md w-full h-14"
                    />
                </div>
                {state.loading ? 'Loading' : <ItemList filteredData={filteredData} fetchData={fetchData}/>}
                
            </div>
            
                <div className='flex flex-col gap-5'>
                    {/* Add item modal */}
                    <button className="bg-primary border text-white px-16 py-8 rounded-md
                        lg:self-start lg:px-8 xl:px-16 w-full font-semibold"
                        onClick={() => {openModal("AddItemModal", {})}}>Add a new item
                    </button>
                    {/* <Filter /> */}
                </div>
            
        </>
    )
}

export default Database