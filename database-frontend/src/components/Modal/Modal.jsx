import AddItemForm from './AddItemForm'
import { useContext } from 'react'
import { NewItemContext } from "../Database"

function Modal( {setOpenModal} ) {
    const {formData, setFormData, addItem} = useContext(NewItemContext)

    const handleSubmit = (e) => {
        console.log("Clicked on Done button")
        e.preventDefault();
        // Check Inputs
        if(!formData.name || !formData.description || !formData.category) return null
        
        // Submit Data
        console.log(formData);
        addItem(e)

        // Clear Inputs
        setFormData("")
        // Close Modal
        setOpenModal(false)
    };

    return (
        // Modal Background
        <div className="fixed w-full h-full top-0 left-0 no-doc-scroll
            backdrop-blur-sm flex justify-center items-center">
            {/* Modal Container */}
            <div className="w-1/4 h-1/4 rounded-xl
                bg-white
                flex flex-col px-25 py-25">
                {/* Close Button */}
                <div className="flex justify-end">
                    <button
                        className="bg-transparent border-0 text-2xl cursor-pointer text-red-950"
                        onClick={() => {setOpenModal(false)}}>X</button>
                </div>
                {/* Modal Content */}
                {/* Title */}
                <div className="inline-block text-center mt-2.5">
                    <h1 className="text-xl font-semibold">Add a new item</h1>
                </div>
                {/* Body */}
                <div className="flex flex-col flex-1 justify-center items-center text-center">
                    <AddItemForm />
                </div>
                {/* Footer */}
                <div className="flex flex-initial self-end justify-center 
                        w-32 h-10
                        m-2 ">
                    <button className="bg-red-500 px-8 rounded-full text-white drop-shadow-md font-semibold"
                        onClick={handleSubmit}>
                        Done
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Modal