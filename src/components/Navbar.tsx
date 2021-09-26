import React, {useRef, useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import {FaBars} from 'react-icons/fa';
import {GiBookshelf} from 'react-icons/gi';

const Navbar:React.FC = () => {
    const containerRef = useRef<HTMLDivElement|null>(null);
    const listRef = useRef<HTMLUListElement|null>(null);
    const [dropdown, setDropdown] = useState(false);
    
    const toggleDropdown = ()=>{
        if(listRef.current){
            if(dropdown){
                listRef.current.style.height = '0px';
            }else if (containerRef.current){
                listRef.current.style.height = `${containerRef.current.offsetHeight}px`
            }
            setDropdown(!dropdown);
        }
    }

    const handleClick = (e:any) => {
        const target = e.target;
        const childs:HTMLCollection|undefined = document.querySelector('.container')?.children;
        if(childs){
            for(let i=0;i<childs?.length;i++){
                if(!childs[i].classList.contains('search-bar')){
                    childs[i].children[0].classList.remove('active');
                }
            }
        }
        if(!target.classList.contains('container') && !target.classList.contains('search-bar')){
            target.classList.add('active')
        }
    }

    useEffect(() => {
        if(containerRef.current){
            containerRef.current.addEventListener('click',(e:any)=>handleClick(e))
            return containerRef.current.removeEventListener('click',handleClick)
        }
    }, [])
    

    return (
        <nav className="navbar">
            <Link to='/home'>
                <button className="logo">
                    <GiBookshelf />
                </button>
            </Link>
            <ul className="nav-list" ref={listRef}>
                <div className="container" ref={containerRef}>
                <input type="text" placeholder="Search" className="search-bar"/>
                <li>
                    <Link to='/books'>
                        Products
                    </Link>
                </li>
                <li>
                    <Link to='/home'>
                        Home
                    </Link>
                </li>
                
                <li>
                    <Link to='/contact'>
                        Contact
                    </Link> 
                </li>
                
                <li>
                    <Link to='/about'>
                        About
                    </Link>
                </li>
               </div>
            </ul>
            <button className="toggle-btn" onClick={toggleDropdown}>
                <FaBars/>
            </button>            
        </nav>
    )
}

export default Navbar
