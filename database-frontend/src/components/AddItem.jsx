import { useEffect, useState } from "react"
import ItemList from "./ItemList"
import axios from "../axios"


function AddItem() {
  const [input, setInput] = useState('')
  const [items, setItems] = useState([])

  const fetchData = async () => {
    try {
      const response = await axios.get('/items')
      setItems(response.data)
    } catch (err) {
      console.log(err.message)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

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
    <div className="text-white flex flex-col items-center py-10">
      <h1>Add a new item here</h1>
      <div className="flex gap-5 mt-3">
        <input
          type="text"
          placeholder="New Item..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="text-black flex flex-row text-center rounded-md h-10"
        />
        <button
          type="submit"
          className="bg-red-500 px-3 rounded-md h-10"
          onClick={(e) => addItem(e)}
        >Add</button>
      </div>
      <ItemList items={items} fetchData={fetchData}/>
    </div>
    
    </>
  )
}

export default AddItem