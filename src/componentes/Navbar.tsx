import React from 'react'
import logo from '../img/logo.png';
import '../scss/navbar.scss'

export const Navbar =()=>{
    return (
        <nav>
            <Image src={logo}/>

            <div className="text">
                <p>etec fhg</p>
                <p>Ferrúcio humberto gazzetta | Nova Odessa</p>
            </div>
        </nav>
    )
}

export const Image = ({src,...props})=>{
    return <img src={src} {...props}/>
}