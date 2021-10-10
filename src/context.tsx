import React, { useState, useEffect, useContext, useReducer } from "react";
import axios from "axios";
import {bookTypes, Props} from './types/customTypes'

const token = Buffer.from(`${process.env.USER}:${process.env.PASS}`).toString('base64');
const baseUrl = 'http://localhost:5000/api/v1'
const LAN_URL = `http://${process.env.LAN_URL}:5000/api/v1`
axios.defaults.headers.common['Authorization'] = token;
const AppContext = React.createContext<any|null>(null);

const AppProvider:React.FC<Props> = ({children})=>{
    const [books, setBooks] = useState<Array<bookTypes>>([{title:'Title',author:'Author', image_url:'image_url',price:0,genre:'Fantasy'}]);
    const [book, setBook] = useState<bookTypes>({title:'Title',author:'Author', image_url:'image_url',price:0,genre:'Fantasy'});
    const getBook = async (title:string)=>{
        const response = await axios.get(`${baseUrl}/books/title/${title}`);
        setBook(response.data);
    }

    const getBooks = async ()=>{
        console.log(`${process.env.USER}`);
        const response = await axios.get(`${baseUrl}/books/`);
        setBooks(response.data.Books);
    }

    useEffect(() => {getBooks()}, [])

    return <AppContext.Provider value={{books, book, getBook}}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = ()=>{
    return useContext(AppContext);
}
export {AppContext,AppProvider};