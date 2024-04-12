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
            <div className="justify-self-center">
                {/* Add new item button to open modal*/}
                <button 
                    className="bg-primary border text-white px-16 py-8 rounded-md cursor-pointer"
                    onClick={() => { setOpenModal(true)}}>Add New Item
                </button>

                {openModal && <Modal />}
            </div>
        </ToggleModalContext.Provider>
    ) 
}

export default ModalElement