function Modal( {setOpenModal} ) {
    
    return (
        // Modal Background
        <div>
            {/* Modal Container */}
            <div>
                {/* Close Button */}
                <div>
                    <button onClick={setOpenModal(false)}>X</button>
                </div>
                {/* Modal Content */}
                <div>
                    {/* Insert Prop Here. Send setOpenModal function */}
                    
                </div>
            </div>
        </div>
    )
}

export default Modal