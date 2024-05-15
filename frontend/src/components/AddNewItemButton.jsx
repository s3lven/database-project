import { useModalContext } from '../hooks/useModalContext'

function AddNewItemButton() {
    const { openModal } = useModalContext()

    return (
        <button className="bg-primary border text-white px-16 py-8 rounded-md lg:self-start lg:px-8 xl:px-16 w-full font-semibold"
            onClick={() => {openModal("AddItemModal", {})}}>Add a new item</button>
    )
}

export default AddNewItemButton