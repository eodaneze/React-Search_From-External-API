import React from 'react'
import SearchBox from './SearchBox'
import "./App.css"
const App = () => {
  return (
    <div>
        <div className="search-container">
             <SearchBox />
            <div className="search-content">
                This is the search content
            </div>
        </div>
    </div>
  )
}

export default App