import React, { useState, useEffect, useContext, useReducer } from "react";
import axios from "axios";
import {bookTypes} from './types/customTypes'
interface Props{
    children:any;
}

const baseUrl = 'http://localhost:5000/api/v1/books/'

const AppContext = React.createContext<any|null>(null);

const AppProvider:React.FC<Props> = ({children})=>{
    const [books, setBooks] = useState<Array<bookTypes>>([{title:'Arthur',author:'John', image_url:'',price:0,genre:''}]);
    const [book, setBook] = useState<bookTypes>({title:'Arthur',author:'John', image_url:'',price:0,genre:''});

    const token = Buffer.from(`${process.env.USER}:${process.env.PASS}`, 'utf8').toString('base64')
    
    const getBook = async (title:string)=>{
        const response = await axios.get(`${baseUrl}title/${title}`,{headers:{
            'Authorization':`Basic ${token}`
        }});
        setBook(response.data);
    }

    const getBooks = async ()=>{
        const response = await axios.get(baseUrl, {headers:{
            'Authorization':`Basic ${token}`
        }});
        setBooks(response.data);
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