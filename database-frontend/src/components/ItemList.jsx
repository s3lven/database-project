import Item from "./Item"
import axios from "../axios"
import { useItemsContext } from "../hooks/useItemsContext"
import { useAuthContext } from "../hooks/useAuthContext"

function ItemList({ filteredData }) {
    const { dispatch } = useItemsContext()
    const { user } = useAuthContext()

    const deleteItem = async (id) => {
        if (!user) {
            console.log("You must be logged in before deleting an item")
            return
        }

        try{
            axios
                .delete(`/api/items/${id}`, {
                    headers: { 'Authorization': `Bearer ${user.data.token}`}
                })
                .then( res => {
                    dispatch({type: 'DELETE_ITEM', payload: res.data})
                    console.log("Deleted item", res.data)
                })
        } catch (err) {
            console.log(err.message)
        }
    }

    return (
        <>
            {/* List Element */}
            {filteredData.length === 0 ? 
            <div className="bg-white rounded my-20 mx-auto p-20 relative shadow=[2px_2px_5px_rgba(0,0,0,0.05)]
                flex justify-center">
                <p className="">No items found</p>
            </div>
            :
                <ul className="">
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