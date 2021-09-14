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
                <h4 className="book-author">{book.author}</h4>
                <p className="book-genre">{book.genre}</p>
                <p className="book-price">{book.price}£</p>
                <p className="book-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, rem id. Sit suscipit nisi accusamus porro mollitia eum quidem, minus atque delectus perferendis laboriosam magni sapiente doloremque. Repellat inventore ipsa ut dolore corrupti culpa debitis ipsam neque tempora labore, illo placeat laudantium corporis fugit, voluptates mollitia eius rem necessitatibus quae?</p>
            </div>
           </section>
        </main>
    )
}

export default SingleBookPage
