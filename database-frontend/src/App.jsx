import Database from './components/Database'
import Header from './components/Header'

// TODO: 
// Add Footer with a divder, author, github link, and technologies used
// Fix Header with appropriate image/text
// Determine Typography and Colors
// Determine the layout for each item and implement with flexbox
// Determine how to update each item
// Get all of the medical items data
// Based on above, determine paarmeters for item and update the mongoDB.
// Make the website responsive
// Add Authentication to protect the app from unwanted users altering the data


function App() {

    return (
      <>
        <Header />
        {/* Database Feature */}
        <Database />
      </>
    )
}

export default App
