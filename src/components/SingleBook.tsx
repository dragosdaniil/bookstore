import React from 'react'
import {bookTypes} from '../types/customTypes'
import { Link } from 'react-router-dom'

const SingleBook:React.FC<bookTypes> = (props:bookTypes) => {
    return (
        <article className="single-book">
            <Link to={`/book/${props.title}`}>
                <img src={props.image_url} className="book-image"/>
            </Link>    
            <h3 className="book-title">{props.title}</h3>
            <p className="book-price">{props.price}£</p>
        </article>
    )
}

export default SingleBook
