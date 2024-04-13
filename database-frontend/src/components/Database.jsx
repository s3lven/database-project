import React, { useState, useEffect } from 'react'
import axios from '../axios'
import ModalElement from './Modal/ModalElement'
import ItemList from './ItemList'
import Filter from './Filter'

export const NewItemContext = React.createContext()

function Database() {
    const [filterInput, setFilterInput] = useState('')
    const [apiData, setApiData] = useState([])
    const [filteredData, setFilteredData] = useState([])
    const [emptyFields, setEmptyFields] = useState([])

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

    const handleInputChange = (e) => {
        // Change Filter Bar Input
        const filterTerm = e.target.value
        setFilterInput(filterTerm)

        // Filter Algorithm
        const filteredItems = apiData.filter((item) => {
            let filteredItem = item.name.toLowerCase().includes(filterTerm.toLowerCase())
            console.log(filteredItem)
            // filteredItem = item.specialRequirements.includes(filterParam)
            return filteredItem
        })
        setFilteredData(filteredItems)
    }
    
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

    const contextValue = {
        apiData,
        formData,
        setFormData,
        fetchData,
        emptyFields,
        setEmptyFields,
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
                        onChange={handleInputChange}
                        className="text-black text-center rounded-md w-full h-14"
                    />
                </div>
                <ItemList filteredData={filteredData} fetchData={fetchData}/>
            </div>
            
            <NewItemContext.Provider value={contextValue}>
                <div className='flex flex-col gap-5'>
                    {/* Modal Code */}
                    <div>
                                <ModalElement />
                    </div>
                    <Filter />
                </div>
            </NewItemContext.Provider>
            
        </>
    )
}

export default Database