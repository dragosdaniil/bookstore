import React from 'react'
import { useGlobalContext } from '../context'
import SingleBook from '../components/SingleBook';
import { bookTypes } from '../types/customTypes';
import FilterMenu from '../components/FilterMenu';

const Books = () => {
    const {books} = useGlobalContext();
    return (
        <main className="books-page">
            <FilterMenu books={books}/>
            {
                books.map((book:bookTypes, index:number)=><SingleBook {...book} key={index}/>)
            }
        </main>
    )
}

export default Books
