import { BrowserRouter, Routes, Route } from "react-router-dom"

// pages and components
import Home from './pages/Home'
import Navbar from './components/Navbar'

// context & modal management
import ModalManager from "./components/Modal/ModalManager"
import ModalProvider from "./contexts/ModalContext"
import ItemsProvider from "./contexts/ItemsContext"
import AuthContextProvider from "./contexts/AuthContext"

// TODO High Priority
// TODO Add Authentication to protect the app from unwanted users altering the data
// ? Low Priority
// ? Add user notifications for 'item added' and 'item updated'
// ? Add loading UI in the case the database needs ot reload
// ? Add metrics for items in each category/location


function App() {

    return (
        <ModalProvider>
          <AuthContextProvider>
            <ItemsProvider>
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
          </ItemsProvider>
        </AuthContextProvider>
      </ModalProvider>
    )
}

export default App
