import React, {useEffect, useState} from 'react'
import SingleBook from "./SingleBook"
import {bookTypes} from '../types/customTypes'
import {useGlobalContext} from '../context';

const NewBooks:React.FC = () => {
    const context = useGlobalContext();
    const books = context.books;
    console.log(books);

    return (
        <section className="new-books-section">
            {books ? books.map((singleBook:bookTypes, index:number)=><SingleBook {...singleBook} key={index}/>):<article>{"No books have been found"}</article>}
        </section>
    )
}

export default NewBooks;
