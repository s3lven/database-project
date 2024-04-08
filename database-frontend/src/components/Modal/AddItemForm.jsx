import { useState } from 'react'

function AddItemForm() {
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        category: ""
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData)

        // add item to database function
    }
    
    return (
        <>
            <main>
                <form className="flex flex-col justify-center items-center gap-8"
                    onSubmit={handleSubmit}>
                    <input 
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Item Name"
                    />
                    <input 
                        type="text"
                        value={formData.description}
                        onChange={handleInputChange}
                        placeholder="Description"
                    />
                    <input 
                        type="text"
                        value={formData.category}
                        onChange={handleInputChange}
                        placeholder="Category"
                    />
                </form>
            </main>
        </>
    )
}

export default AddItemForm