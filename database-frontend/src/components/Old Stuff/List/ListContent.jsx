import { useState, useEffect } from 'react'
import axios from "../../../axios"

import Form from "./Form"
import ItemList from './ItemList'

// Connecting Back End with Imran

function ListContent() {
    // States
    const [input, setInput] = useState('')
    const [items, setItems] = useState([])

    // Fetch Data
    const fetchData = async () => {
        try {
          const response = await axios.get('/items')
          setItems(response.data)
        } catch (err) {
          console.log(err.message)
        }
      }

    // UseEffect
    useEffect(() => {
        fetchData()
      }, [])


    // addItem async
    const addItem = async (e) => {
        e.preventDefault();
        if(input.length === 0) return null;
        await axios.post('/items', [{
          ...items, 
          text: input,
          completed: false
        }])
    
        fetchData()
        setInput('')
        console.log('added Item')
      }




  return (
    <>
        {/* Add all components here */}
        <Form input={input} setInput={setInput} addItem={addItem}/>
        <ItemList items={items} fetchData={fetchData}/>
        {/* Filter */}
        {/* Author/Footer */}
    </>
  )
}

export default ListContent