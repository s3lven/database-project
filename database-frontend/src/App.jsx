import { BrowserRouter, Routes, Route } from "react-router-dom"

// pages and components
import Home from './pages/Home'
import Navbar from './components/Navbar'

// context
import ModalProvider from "./contexts/ModalContext"
import ModalManager from "./components/Modal/ModalManager"

// TODO: 
// Determine how to update each item
// Figure out how to add multiple modals for "add item" and "update item"
// Add Authentication to protect the app from unwanted users altering the data


function App() {

    return (
        <ModalProvider>
          <ModalManager />
          <BrowserRouter>
          <Navbar />
          <div className="w-1400 px-20 pb-20 pt-10 my-0 mx-auto">
            <Routes>
              <Route
              path="/"
              element={<Home />}
              />
            </Routes>
          </div>        
        </BrowserRouter>
      </ModalProvider>
    )
}

export default App
