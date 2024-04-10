import React, { useState, useEffect } from 'react'
import axios from '../axios'
import ModalElement from './Modal/ModalElement'
import ItemList from './ItemList'

export const NewItemContext = React.createContext()

function Database() {
    const [filterInput, setFilterInput] = useState('')
    const [apiData, setApiData] = useState([])
    const [filteredData, setFilteredData] = useState([])

    // for new items
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        category: "",
        recommendedUses: "",
        specialRequirements: "",
        numberAvailable: 0

    })

    const handleInputChange = (e) => {
        // Change Filter Bar Input
        const filterTerm = e.target.value
        setFilterInput(filterTerm)

        // Filter Algorithm
        const filteredItems = apiData.filter((item) => {
            return item.name.toLowerCase().includes(filterTerm.toLowerCase())
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

    const addItem = async(e) => {
        e.preventDefault()
        await axios.post('/items', [{
            ...apiData, 
            name: formData.name,
            description: formData.description,
            category: formData.category
        }])
        console.log('added Item')
        fetchData()
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
        formData,
        setFormData,
        addItem
    }

    return (
        <>
            {/* Search Bar Code */}
            <div className="">
                {/* Input Element */}
                <div className="">
                    <input
                        type="text"
                        placeholder="Search..."
                        value={filterInput}
                        onChange={handleInputChange}
                        className="text-black text-center rounded-md w-full h-14"
                    />
                </div>
                <ItemList filteredData={filteredData} fetchData={fetchData}/>
            </div>
            {/* Modal Code */}
            <NewItemContext.Provider value={contextValue}>
                    <ModalElement />
            </NewItemContext.Provider>
        </>
    )
}

export default Database