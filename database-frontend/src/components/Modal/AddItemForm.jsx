import { useContext } from 'react'
import { NewItemContext } from "../Database"
import Select from '../Select'

const locationOptions = [
    {label: "BIMH", value: 1},
    {label: "CHT", value: 2},
    {label: "MH", value: 3},
    {label: "Other", value: 4},
]

const requirementOptions = [
    {label: "None", value: 6},
    {label: "Extended Setup", value: 7},
    {label: "Advanced Setup", value: 8},
    {label: "Special Order Consumables", value: 9},
    {label: "Other", value: 10},
]

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
                    name="recommendedUses"
                    onChange={handleInputChange}
                    className='add-item'
                />
                <label >Number Available</label>
                <input 
                    type="number"
                    value={formData.numberAvailable}
                    name="numberAvailable"
                    onChange={handleInputChange}
                    className='add-item'
                />
                <label >Product URL (if available)</label>
                <input 
                    type="text"
                    value={formData.productURL ?? ''}
                    name="productURL"
                    onChange={handleInputChange}
                    className='add-item'
                />
                <div className="display flex gap-5">
                    <div className='basis-1/2'>
                        <label >Location</label>
                        <Select 
                            multiple
                            value={formData.location ?? []}
                            onChange={o => {setFormData((prevFormData) => ({
                                ...prevFormData,
                                location: o
                            }))}}
                            options={locationOptions}
                        />
                    </div>
                    <div className='basis-1/2'>
                        <label >Special Requirements</label>
                        <Select 
                            multiple
                            value={formData.specialRequirements ?? []}
                            onChange={o => {setFormData((prevFormData) => ({
                                ...prevFormData,
                                specialRequirements: o
                            }))}}
                            options={requirementOptions}
                        />
                    </div>
                </div>
            </form>
        </>
    )
}

export default AddItemForm