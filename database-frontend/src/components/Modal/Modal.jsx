import AddItemForm from './AddItemForm'

function Modal( {setOpenModal} ) {
    
    return (
        // Modal Background
        <div className="fixed w-full h-full top-0 left-0
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
                        m-2 bg-red-500 rounded-full text-white drop-shadow-md font-semibold">
                    <button className="">
                        Done
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Modal