import React, {useState} from 'react'
import { bookTypes, customProps } from '../types/customTypes';
import { FaBars } from 'react-icons/fa';

const FilterMenu:React.FC<customProps> = ({books}) => {
    const [showFilters, setShowFilters] = useState(false);
    const filters = books.reduce(
        (acc:any,book:bookTypes)=>{
            if(!acc.genres.includes(book.genre)){
                acc.genres.push(book.genre);
            }

            if(!acc.authors.includes(book.author)){
                acc.authors.push(book.author);
            }

            if(book.price){
                if(acc.maxPrice < book.price){
                    acc.maxPrice = book.price
                }

                if(acc.minPrice > book.price){
                    acc.minPrice = book.price
                }
            }

        return acc;
    },{genres:[] ,authors:[], minPrice:9999, maxPrice:0})

    return (
        <aside className={showFilters?"book-filters show-filters":"book-filters"}>
            <button className="toggle-filters-btn" onClick={()=>setShowFilters(!showFilters)}>
                <FaBars />
            </button>
            <div className="price-range">
                <input type="range" min={filters.minPrice} max={filters.maxPrice}/>
            </div>
            <ul className="filters-genre">{
                filters.genres.map((genre:string)=>{
                    <li className="book-genre">{genre}</li>
                })
            }</ul>
            <ul className="filters-author">{
                filters.authors.map((author:string)=>{
                    <li className="book-author">{author}</li>
                })
            }</ul>            
        </aside>
    )
}

export default FilterMenu
