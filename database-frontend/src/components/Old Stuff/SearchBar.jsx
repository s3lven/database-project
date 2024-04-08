import {useState, useEffect} from 'react'
import axios from 'axios'

import Post from './Post'   

function SearchBar() {
    const [searchInput, setSearchInput] = useState('')
    const [posts, setPosts] = useState([])
    const [filteredPosts, setFilteredPosts] = useState([])

    const handleInputChange = (e) => {
        const searchTerm = e.target.value
        setSearchInput(searchTerm)

        const filteredItems = posts.filter((item) => {
            return item.name.toLowerCase().includes(searchTerm.toLowerCase())
        })
        setFilteredPosts(filteredItems)
    }    

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/`)
            .then(res => {
                // console.log(res.data)
                setPosts(res.data)
                setFilteredPosts(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    },[])

    return (
        <>
            <div className="text-white">
                {/* Input Element */}
                <div className="flex flex-row justify-center">
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchInput}
                        onChange={handleInputChange}
                        className="text-black text-center rounded-md w-3/5 h-14"
                    />
                </div>
                {/* List Element */}
                {filteredPosts.length === 0 ?
                    <p className="list-container my-10">No items found</p> :
                    <ul className="list-container my-10">
                        {filteredPosts.map(post =>
                            <Post 
                                key={post.id}
                                data={post}
                            />
                        )}
                    </ul>
                }
            </div>
        </>
    )
}

export default SearchBar