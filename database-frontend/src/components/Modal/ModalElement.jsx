import { useState } from 'react'

import Modal from './Modal'

function ModalElement() {
    const [openModal, setOpenModal] = useState(false)


    return (
        <div className="flex justify-center mb-10 ">
            {/* Add Button */}
            <button 
                className="bg-red-500 py-5 px-5 rounded-full text-white drop-shadow-md font-semibold"
                onClick={() => { setOpenModal(true)}}>Add New Item
            </button>

            {openModal && <Modal setOpenModal={setOpenModal}/>}
        </div>
    ) 
}

export default ModalElement