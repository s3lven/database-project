import { useContext, useState } from 'react'
import { NewItemContext } from "../Database"
import { ToggleModalContext } from './ModalElement'
import Select from '../Select'
import axios from '../../axios'
import { locationOptions, requirementOptions } from './options'



function AddItemForm() {
    const [error, setError] = useState(null)
    const {apiData, formData, setFormData, fetchData, emptyFields, setEmptyFields,} = useContext(NewItemContext)
    const {setOpenModal} = useContext(ToggleModalContext)

    const addItem = async(e) => {
        e.preventDefault()
        await axios.post('/items', {
            ...apiData, 
            name: formData.name,
            category: formData.category,
            description: formData.description,
            recommendedUses: formData.recommendedUses,
            specialRequirements: formData.specialRequirements,
            numberAvailable: formData.numberAvailable,
            productURL: formData.productURL,
            location: formData.location,
        })
        .then(() => {
            setFormData({name: "",
            description: "",
            category: "",
            recommendedUses: "",
            numberAvailable: 0,
            productURL: "",
            location: [],
            specialRequirements: [],})
            setEmptyFields([])
            setOpenModal(false)
            console.log("Finished adding new item to list")
        })
        .catch((error) => {
            setError(error.response.data.error)
            setEmptyFields(error.response.data.emptyFields)
        })
        
        fetchData()
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }))
    }    

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Adding new item: ", e)
        // Submit Data
        addItem(e)
    }

    
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label >Item Name</label>
                <input 
                    type="text"
                    value={formData.name ?? ''}
                    name="name"
                    onChange={handleInputChange}
                    className={`${emptyFields.includes('name') ? 'input_error' : ''} add-item`}
                />
                <label >Category</label>
                <input 
                    type="text"
                    value={formData.category ?? ''}
                    name="category"
                    onChange={handleInputChange}
                    className={`${emptyFields.includes('category') ? 'input_error' : ''} add-item`}
                />
                <label >Number Available</label>
                <input 
                    type="number"
                    value={formData.numberAvailable}
                    name="numberAvailable"
                    onChange={handleInputChange}
                    className={`${emptyFields.includes('numberAvailable') ? 'input_error' : ''} add-item`}
                />
                <label >Description</label>
                <input 
                    type="text"
                    value={formData.description ?? ''}
                    name="description"
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
                            containerName="location"
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
                                containerName="specialRequirements"
                            />                        
                    </div>
                </div>
                <div className='flex justify-end my-5'>
                    <button className="bg-red-500 px-10 py-3.5 rounded-full text-white drop-shadow-md font-semibold">Done</button>
                </div>
                    {error && <div className="p-2.5 bg-[#ffefef] border border-solid border-error text-error rounded my-5 mx-0">{error}</div>}
            </form>
        </>
    )
}

export default AddItemForm