import React from 'react'
import {bookTypes} from '../types/customTypes'
import { Link } from 'react-router-dom'

const SingleBook:React.FC<bookTypes> = (props:bookTypes) => {
    return (
        <article className="single-book">
            <Link to='/'>
                <img src={props.image} alt="book-image"  className="book-image"/>
            </Link>    
            <h3 className="book-title">{props.title}</h3>
            <p className="book-price">{props.price}</p>
        </article>
    )
}

export default SingleBook
