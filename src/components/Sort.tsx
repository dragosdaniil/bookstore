import React from 'react'

const Sort = () => {
    return (
        <header className="sort-bar">
            <select name="sort-options" id="sort-options">
                <option value="A-Z">A-Z</option>
                <option value="Z-A">A-Z</option>
                <option value="Low-High">Low to High</option>
                <option value="High-Low">High to Low</option>
            </select>
        </header>
    )
}

export default Sort
