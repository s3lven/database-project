import React , { useState } from 'react'
import Modal from './Modal'

export const ToggleModalContext = React.createContext()

function ModalElement() {
    const [openModal, setOpenModal] = useState(false)
    const contextValue = {
        setOpenModal
    }

    return (
        <ToggleModalContext.Provider value={contextValue}>
                {/* Add new item button to open modal*/}
                <button 
                    className="bg-primary border text-white px-16 py-8 rounded-md cursor-pointer
                    lg:self-start lg:px-8 xl:px-16 w-full"
                    onClick={() => { setOpenModal(true) }}>Add New Item
                </button>

                {openModal && <Modal />}
        </ToggleModalContext.Provider>
    ) 
}

export default ModalElement