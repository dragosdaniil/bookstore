import React from 'react'
import { useGlobalContext } from '../context'
import SingleBook from '../components/SingleBook';
import { bookTypes } from '../types/customTypes';
import FilterMenu from '../components/FilterMenu';
import Sort
 from '../components/Sort';
const Books = () => {
    const {books} = useGlobalContext();
    return (
        <main className="books-page">
            <div className="center-container">
                <Sort />
                <FilterMenu books={books}/>
               <div className="books-container">
                {
                    books.map((book:bookTypes, index:number)=><SingleBook {...book} key={index}/>)
                }
               </div>
            </div>
        </main>
    )
}

export default Books
