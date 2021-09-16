import React, { useEffect } from 'react'
import { useGlobalContext } from '../context'
import { useParams } from 'react-router'

const SingleBookPage:React.FC = () => {
    const {getBook, book} = useGlobalContext();
    console.log(book)
    const {title} = useParams<{title?:string|undefined}>();
    useEffect(()=>{
        getBook(title);
    },[])
    return (
        <main>
           <section className="single-book-page">
           <img src={`${book.image_url}`}  className="book-image"/>    
            <div className="book-info">
                <h3 className="book-title">{book.title}</h3>
                <h4 className="book-author">{book.author}</h4>
                <p className="book-genre">{book.genre}</p>
                <p className="book-price">{book.price}£</p>
                <p className="book-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Deleniti unde veritatis asperiores eligendi omnis numquam suscipit autem laudantium repudiandae. 
                Ut velit vero aspernatur tempore voluptatibus suscipit omnis sit pariatur laboriosam consequuntur eaque, 
                praesentium iste error mollitia cum ad autem cumque minus aut tempora consectetur est expedita amet. Voluptatem, deserunt possimus?</p>
            </div>
           </section>
        </main>
    )
}

export default SingleBookPage
