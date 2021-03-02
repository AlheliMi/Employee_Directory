import React from "react";
import "../styles/SearchBox.css"

function SearchBox(props) {
    return (
        <div className="search">
            <input className="searchInput"
            placeholder="Search Employee"
            type="search"
            onChange={props.handleInput} 
            />
        </div>
    )
}

export default SearchBox;