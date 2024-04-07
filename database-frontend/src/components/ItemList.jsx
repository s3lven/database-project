import axios from '../axios'

function ItemList({ items, fetchData }) {

    const updateItem = async (id) => {
        try{
            const response = await axios.put(`/items/${id}`, {
                id
            })
            fetchData()
            return response.data.json
        } catch (err) {
            console.log(err.message)
        }
    }

    const deleteItem = async (id) => {
        try{
            const response = await axios.delete(`/items/${id}`, {
                id
            })
            fetchData()
            return response.data.json
        } catch (err) {
            console.log(err.message)
        }
    }

    console.log(items, "Here are the items")

    return (
    <div className="text-white">
        <ul className="flex flex-col">
            {items?.map((item) => {
                return <>
                    <li onClick={() => updateItem(item._id)} key={item._id}>
                        {item.text}</li>
                        <button type="button" onClick={() => deleteItem(item._id)}>X</button>
                </>
                
            })}
        </ul>
    </div>
    )
}

export default ItemList