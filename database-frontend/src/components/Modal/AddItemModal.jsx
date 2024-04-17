import { IoClose } from "react-icons/io5";

function AddItemModal({ onClose }) {


    return (
        // Modal Background
        <div className="fixed w-full h-full top-0 left-0 backdrop-blur-sm no-doc-scroll
            flex justify-center items-center bg-black/50 z-[100]"
            >
            {/* Modal Container */}
            <div className='rounded-xl border-black shadow-lg bg-white w-4/5
                flex flex-col p-7'>
                {/* Close Button */}
                <div className="flex justify-end">
                    <button
                        className="bg-transparent border-0 text-2xl cursor-pointer text-black hover:text-gray-900"
                        onClick={onClose}>
                            <IoClose />
                    </button>
                </div>
                {/* Modal Content */}
                {/* Title */}
                <div className="inline-block text-center mt-2.5">
                    <h1 className="text-xl font-semibold">Add a new Item</h1>
                </div>
                {/* Body */}
                <div>
                </div>
            </div>
        </div>
    )
}

export default AddItemModal