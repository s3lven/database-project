import { useState } from 'react'

import Modal from './Modal'

function ModalElement() {
    const [openModal, setOpenModal] = useState(false)

    return (
        <div className="justify-self-center">
            {/* Add new item button to open modal*/}
            <button 
                className="bg-primary border text-white px-16 py-8 rounded-md cursor-pointer"
                onClick={() => { setOpenModal(true)}}>Add New Item
            </button>

            {openModal && <Modal setOpenModal={setOpenModal}/>}
        </div>
    ) 
}

export default ModalElement