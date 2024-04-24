import { useModalContext } from '../../hooks/useModalContext.jsx'

import AddItemModal from './AddItemModal'
import UpdateItemModal from './UpdateItemModal'

const ModalLookup = {
    AddItemModal : AddItemModal,
    UpdateItemModal : UpdateItemModal,
}

function ModalManager() {
    const { modal, closeModal } = useModalContext()

    if (!modal) return null
    const Modal = ModalLookup[modal.name]

    // Return dynamic modal with onClose and any props
    return (<Modal onClose={closeModal} {...modal.props}/>)
}

export default ModalManager