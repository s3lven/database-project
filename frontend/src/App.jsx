import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

// pages and components
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Navbar from './components/Navbar'

// context & modal management
import ModalManager from "./components/Modal/ModalManager"
import ModalProvider from "./contexts/ModalContext"
import ItemsProvider from "./contexts/ItemsContext"
import { useAuthContext } from "./hooks/useAuthContext"

// TODO High Priority
// TODO Add Authentication to protect the app from unwanted users altering the data
// TODO add confirmation when deleting item
// TODO add confirmating when updating an item and not confirming
// TODO check for negative numbers in items
// TODO better error messages
// TODO add infrastructure for adding images (do not use current DB)
// TODO add text wrap for description and title
// TODO make 'number available' field smaller
// TODO add TESTINGGGGGGGGG
// TODO add 'last edit by' field
// ? Low Priority
// ? Add loading screen
// ? Add user notifications for 'item added' and 'item updated'
// ? Add loading UI in the case the database needs ot reload
// ? Add metrics for items in each category/location


function App() {
  const {user} = useAuthContext()

    return (
        <ModalProvider>
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
                  <Route
                  path="/login"
                  element={!user ? <Login /> : <Navigate to="/" />}
                  />
                  <Route
                  path="/signup"
                  element={!user ? <Signup /> : <Navigate to="/" />}
                  />
                </Routes>
              </div>        
            </BrowserRouter>
          </ItemsProvider>
      </ModalProvider>
    )
}

export default App
