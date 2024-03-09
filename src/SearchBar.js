import React from 'react'
import {FaSearch}from "react-icons/fa"
import "../src/search-bar.css"
function SearchBar({handleSearch}) {
    function handleOnChange(event){
       handleSearch(event.target.value)
    }
  return (
    <div className='searchbar-container'>
       <FaSearch id="search-icon"/>
        <input type='text' name="search" onChange={handleOnChange}/>
    </div>
  )
}

export default SearchBar