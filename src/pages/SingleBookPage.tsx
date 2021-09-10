import React from 'react'
import { bookTypes } from '../types/customTypes'

const SingleBookPage:React.FC = () => {

    return (
        <main className="single-book-page">
            <img src="" alt="book-image"  className="book-image"/>    
            <h3 className="book-title"></h3>
            <p className="book-author"></p>
            <p className="book-genre"></p>
            <p className="book-price"></p>
        </main>
    )
}

export default SingleBookPage
