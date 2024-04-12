import { BrowserRouter, Routes, Route } from "react-router-dom"

// pages and components
import Home from './pages/Home'
import Navbar from './components/Navbar'

// TODO: 
// Setup the search filter to filter name, category, location
// Determine how to update each item
// Add Authentication to protect the app from unwanted users altering the data


function App() {

    return (
        <div className="App">
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
      </div>
    )
}

export default App
