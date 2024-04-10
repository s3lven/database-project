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
            <form>
                <label >Item Name</label>
                <input 
                    type="text"
                    value={formData.name ?? ''}
                    name="name"
                    onChange={handleInputChange}
                    className='add-item'
                />
                <label >Description</label>
                <input 
                    type="text"
                    value={formData.description ?? ''}
                    name="description"
                    onChange={handleInputChange}
                    className='add-item'
                />
                <label >Category</label>
                <input 
                    type="text"
                    value={formData.category ?? ''}
                    name="category"
                    onChange={handleInputChange}
                    className='add-item'
                />
                <label >Recommended Uses (if any)</label>
                <input 
                    type="text"
                    value={formData.recommendedUses ?? ''}
                    name="category"
                    onChange={handleInputChange}
                    className='add-item'
                />
                <label >Special Requirements (if any)</label>
                <input 
                    type="text"
                    value={formData.specialRequirements ?? ''}
                    name="category"
                    onChange={handleInputChange}
                    className='add-item'
                />
                <label >Number Available</label>
                <input 
                    type="number"
                    value={formData.numberAvailable ?? ''}
                    name="category"
                    onChange={handleInputChange}
                    className='add-item'
                />
                <label >Product URL (if available)</label>
                <input 
                    type="text"
                    value={formData.productURL ?? ''}
                    name="category"
                    onChange={handleInputChange}
                    className='add-item'
                />
                <label >Location</label>
                <input 
                    type="text"
                    value={formData.location ?? ''}
                    name="category"
                    onChange={handleInputChange}
                    className='add-item'
                />
            </form>
        </>
    )
}

export default AddItemForm