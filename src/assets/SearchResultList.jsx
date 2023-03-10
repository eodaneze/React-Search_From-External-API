import React from 'react'

const SearchResultList = ({results}) => {
  return (
    <div className= "result">
        {/* <div>A</div>
        <div>A</div>
        <div>A</div> */}

        {
             results.map((result, index) => {
                  return <div key={index}>{result.name}</div>
             })
        }
    </div>
  )
}

export default SearchResultList