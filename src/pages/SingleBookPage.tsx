import React from 'react'
import { useGlobalContext } from '../context'
import { useParams } from 'react-router'

const SingleBookPage:React.FC = () => {
    const {getBook, book} = useGlobalContext();
    console.log(book)
    const {title} = useParams<{title?:string|undefined}>();
    getBook(title);
    return (
        <main>
           <section className="single-book-page">
           <img src={`${book.image_url}`}  className="book-image"/>    
            <div className="book-info">
                <h3 className="book-title">{book.title}</h3>
                <p className="book-author">{book.author}</p>
                <p className="book-genre">{book.genre}</p>
                <p className="book-price">{book.price}£</p>
            </div>
           </section>
        </main>
    )
}

export default SingleBookPage
