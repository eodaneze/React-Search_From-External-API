import React,{useState} from 'react'
import SearchBox from './SearchBox'
import "./App.css"
import SearchResultList from './assets/SearchResultList'
const App = () => {
  const[results, setResults] = useState([])
  return (
    <div>
        <div className="search-container">
             <SearchBox setResults={setResults}/>
            <SearchResultList results={results}/>
        </div>
    </div>
  )
}

export default App