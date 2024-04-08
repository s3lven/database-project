import Item from "./Item"
import axios from "../axios"

function ItemList({filteredData, fetchData}) {
    const deleteItem = async (id) => {
        try{
            const response = await axios.delete(`/items/${id}`, {id})
            fetchData()
            return response.data.json
        } catch (err) {
            console.log(err.message)
        }
    }



    return (
        <>
            {/* List Element */}
            {filteredData.length === 0 ?
                <p className="list-container my-10">No items found</p> :
                <ul className="list-container my-10">
                    {filteredData.map(post =>
                        <Item 
                            key={post._id}
                            data={post}
                            deleteItem={() => deleteItem(post._id)}
                        />
                    )}
                </ul>
            }
        </>
    )
}

export default ItemList