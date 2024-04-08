import { useState } from 'react'


function SearchBar({ placeholder, data}) {
    const [filteredData, setFilteredData] = useState([])
    const [wordEntered, setWordEntered] = useState("")

    const handleFilter = (event) => {
        const searchWord = event.target.value
        setWordEntered(searchWord)
        const newFilter = data.filter((value) => {
            return value.title.toLowerCase().includes(searchWord.toLowerCase())
        })

        if (searchWord === "")
            setFilteredData([])
        else
            setFilteredData(newFilter)
    }

    const clearInput = () => {
        setFilteredData([])
        setWordEntered("")
    }

    return (
        <div>
            <div>
                <input 
                    type="text"
                    placeholder={placeholder}
                    value={wordEntered}
                    onChange={handleFilter}
                />
                <div>
                    {filteredData.length === 0 ? ( <p>Search Icon</p>) : ( <p onClick={clearInput}>Clear Icon</p> )}
                </div>
            </div>
            {filteredData.length != 0 && (
                <div>
                    {filteredData.slice(0,15).map((value) => {
                        return (
                            <a href={value.link} target="_blank" key={value.id}>
                                <p>{value.title}</p>
                            </a>
                        )
                    })}
                </div>
            )}
        </div>
    )
}

export default SearchBar