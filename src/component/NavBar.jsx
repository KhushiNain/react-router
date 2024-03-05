import React from 'react'
import { Link } from 'react-router-dom'

const NavBar=()=>{

    return (
        <nav className='flex'>
            <Link style={{color:"white"}} to="/"> <h2>Kalvium ❤️</h2></Link>
            <div className='flex'>
                <Link style={{color:"white"}} to="/contact"><p>Contacts</p> </Link>
                <Link style={{color:"white"}} to="/about"><p>About</p></Link>
            </div>
        </nav>
    )}
export default NavBar