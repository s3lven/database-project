import React, { useState, useEffect } from 'react'
import axios from '../axios'
import ModalElement from './Modal/ModalElement'
import ItemList from './ItemList'
import Filter from './Filter'
import _ from "lodash"
import AddItemForm from './Modal/AddItemForm'

export const NewItemContext = React.createContext()

function Database() {
    const [filterInput, setFilterInput] = useState('')
    const [apiData, setApiData] = useState([])
    const [filteredData, setFilteredData] = useState([])
    const [emptyFields, setEmptyFields] = useState([])
    const [filter, setFilter] = useState({})

    // for new items
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        category: "",
        recommendedUses: "",
        numberAvailable: 0,
        productURL: "",
        location: [],
        specialRequirements: [],
    })

    const fetchData = async () => {
        try {
            const response = await axios.get('/items')
            setApiData(response.data)
            setFilteredData(response.data)
        } catch (err) {
            console.log(err.message)
        }
    }

    useEffect(() => {
        axios.get('/items')
            .then (res => {
                setApiData(res.data)
                setFilteredData(res.data)
            })
            .catch ((err) => {
                console.log(err.message)
            })
    },[])

    useEffect(() => {
        console.log(filter)
        const shouldDisplay = (item) => {
            // console.log("Item Location: ", item.location)
            let matchesSearch = item.name.toLowerCase().includes(filterInput.toLowerCase())
            // console.log("matchesSearch: ", matchesSearch)
            let matchesLocation = (filter.locationFilter != "" ? _.some(item.location, filter.locationFilter): true)
            // console.log("matchesLocation: ", matchesLocation)
            let matchesRequirements = (filter.requirementFilter != "" ? _.some(item.specialRequirements, filter.requirementFilter): true)

            
    
            return matchesSearch && matchesLocation && matchesRequirements
        }

        const filteredItems = apiData.filter((item) => {
            return shouldDisplay(item)
        })

        setFilteredData(filteredItems)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filterInput, filter])

    const contextValue = {
        apiData,
        formData,
        setFormData,
        fetchData,
        emptyFields,
        setEmptyFields,
        filter,
        setFilter
    }

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
                <ItemList filteredData={filteredData} fetchData={fetchData}/>
            </div>
            
            <NewItemContext.Provider value={contextValue}>
                <div className='flex flex-col gap-5'>
                    {/* Modal Code */}
                    <div>
                                <ModalElement buttonText={"Add New Item"} modalTitle={"Add a new item"} modalBody={<AddItemForm />}/>
                    </div>
                    <Filter />
                </div>
            </NewItemContext.Provider>
            
        </>
    )
}

export default Database