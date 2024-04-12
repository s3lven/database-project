import { IoClose } from "react-icons/io5";
import { useContext } from 'react'
import AddItemForm from './AddItemForm'
import { ToggleModalContext } from './ModalElement'

function Modal() {
    const {setOpenModal} = useContext(ToggleModalContext)

    return (
        // Modal Background
        <div className="fixed w-full h-full top-0 left-0 no-doc-scroll
            backdrop-blur-sm flex justify-center items-center">
            {/* Modal Container */}
            <div className="rounded-xl border-black shadow-lg
                bg-white w-4/5
                flex flex-col px-7 py-6">
                {/* Close Button */}
                <div className="flex justify-end">
                    <button
                        className="bg-transparent border-0 text-2xl cursor-pointer text-red-950"
                        onClick={() => {setOpenModal(false)}}>
                            <IoClose />
                    </button>
                </div>
                {/* Modal Content */}
                {/* Title */}
                <div className="inline-block text-center mt-2.5">
                    <h1 className="text-xl font-semibold">Add a new item</h1>
                </div>
                {/* Body */}
                <div className="">
                    <AddItemForm />
                </div>
            </div>
        </div>
    )
}

export default Modal
