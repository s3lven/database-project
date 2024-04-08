import { useContext } from 'react'
import { NewItemContext } from "../Database"

function AddItemForm() {

    const {formData, setFormData} = useContext(NewItemContext)

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }))
    }
    
    return (
        <>
            <main>
                <form className="flex flex-col justify-center items-center gap-8">
                    <input 
                        type="text"
                        value={formData.name ?? ''}
                        name="name"
                        onChange={handleInputChange}
                        placeholder="Item Name"
                    />
                    <input 
                        type="text"
                        value={formData.description ?? ''}
                        name="description"
                        onChange={handleInputChange}
                        placeholder="Description"
                    />
                    <input 
                        type="text"
                        value={formData.category ?? ''}
                        name="category"
                        onChange={handleInputChange}
                        placeholder="Category"
                    />
                </form>
            </main>
        </>
    )
}

export default AddItemForm