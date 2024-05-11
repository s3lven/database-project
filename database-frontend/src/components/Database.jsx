import React, { useState, useEffect } from 'react'
import axios from '../axios'
import ItemList from './ItemList'
import Filter from './Filter'
import _ from "lodash"
import { useModalContext } from '../hooks/useModalContext'
import { useItemsContext } from '../hooks/useItemsContext'

export const NewItemContext = React.createContext()

function Database() {
    const {openModal} = useModalContext()
    const {items, dispatch} = useItemsContext()

    const [filterInput, setFilterInput] = useState('')
    const [filteredData, setFilteredData] = useState([])
    const [filter, setFilter] = useState({})

    useEffect(() => {
        const fetchItems = async () => { 
        console.log("Grabbing items")
        axios
            .get('/api/items')
            .then (res => {
                setFilteredData(res.data)
                dispatch({type: 'SET_ITEMS', payload: res.data})
            })
            .catch ((err) => {
                console.log(err.message)
            })
        }

        fetchItems()
    },[dispatch])

    useEffect(() => {
        const shouldDisplay = (item) => {
            // console.log("Item Location: ", item.location)
            let matchesSearch = item.name.toLowerCase().includes(filterInput.toLowerCase())
            // console.log("matchesSearch: ", matchesSearch)
            let matchesLocation = (filter.locationFilter != "" ? _.some(item.location, filter.locationFilter): true)
            // console.log("matchesLocation: ", matchesLocation)
            let matchesRequirements = (filter.requirementFilter != "" ? _.some(item.specialRequirements, filter.requirementFilter): true)
            return matchesSearch && matchesLocation && matchesRequirements
        }

        if (items) {
            const filteredItems = items.filter((item) => {
                return shouldDisplay(item)
            })
    
            setFilteredData(filteredItems)
        }
    }, [filterInput, filter])

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
                <ItemList filteredData={filteredData} />
                
            </div>
            
                <div className='flex flex-col gap-5'>
                    {/* Add item modal */}
                    <button className="bg-primary border text-white px-16 py-8 rounded-md
                        lg:self-start lg:px-8 xl:px-16 w-full font-semibold"
                        onClick={() => {openModal("AddItemModal", {})}}>Add a new item
                    </button>
                    <Filter filter={filter} setFilter={setFilter}/>
                </div>
            
        </>
    )
}

export default Database