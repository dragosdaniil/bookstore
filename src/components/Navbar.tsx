import React, {useRef, useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import {FaBars} from 'react-icons/fa';

const Navbar:React.FC = () => {
    const containerRef = useRef<HTMLDivElement|null>(null);
    const listRef = useRef<HTMLUListElement|null>(null);
    const [dropdown, setDropdown] = useState(true);
    
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
        console.log(e.target.parentElement)
        const target = e.target;
        const childs:HTMLCollection|undefined = document.querySelector('.container')?.children;
        if(childs){
            for(let i=0;i<childs?.length;i++){
                childs[i].children[0].classList.remove('active')
            }
        }
        
        target.classList.add('active');
    }

    useEffect(() => {
        if(containerRef.current){
            containerRef.current.addEventListener('click',(e:any)=>handleClick(e))
            return containerRef.current.removeEventListener('click',handleClick)
        }
    }, [])
    

    return (
        <nav className="navbar">
            <ul className="nav-list" ref={listRef}>
               <div className="container" ref={containerRef}>
               <li>
                    <Link to='/'>
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
