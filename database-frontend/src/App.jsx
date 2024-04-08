import { useState } from 'react'

import Header from './components/Header'
import ListContent from './components/List/ListContent'
import Modal from './components/Modal/Modal'

function App() {
    const [openModal, setOpenModal] = useState(false)

    return (
      <>
        <Header />
        <ListContent />

        {openModal && <Modal setOpenModal={setOpenModal}/>}
      </>
    )
}

export default App
