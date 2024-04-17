import { createContext, useState,  } from 'react'

export const ModalContext = createContext()

const ModalProvider = ( {children} ) => {
    const [modal, setModal] = useState(null)

    const openModal = (name, props = {}) => {
        setModal({name, props})
    }

    const closeModal = () => setModal(null)

    return (<ModalContext.Provider value={{modal, openModal, closeModal}}> {children} </ModalContext.Provider>)
}

export default ModalProvider