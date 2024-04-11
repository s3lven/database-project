import { BrowserRouter, Routes, Route } from "react-router-dom"

// pages and components
import Home from './pages/Home'
import Navbar from './components/Navbar'

// TODO: 
// Add Footer with a divder, author, github link, and technologies used
// Setup the search filter to filter name, category, location
// Fix Header with appropriate image/text
// Determine Typography and Colors
// Determine the layout for each item
// Determine how to update each item
// Make the website responsive
// Add Authentication to protect the app from unwanted users altering the data


function App() {

    return (
        <div className="App">
          <BrowserRouter>
          <Navbar />
          <div className="w-1400 p-20 my-0 mx-auto">
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
