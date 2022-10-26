import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../img/logo.png';

export const Navbar = ({ transparent = false }) => {
    return (
        <nav className={transparent ? 'transparent' : ''}>
            <Image className='logo' src={logo} />

            <div className="text">
                <p>etec fhg</p>
                <p>Ferrúcio humberto gazzetta | Nova Odessa</p>
            </div>

            <NavLinks data={
                [
                    { text: "home", url: "/" },
                    { text: "sobre", url: "/sobre" },
                    {text: "galeria", url: "/galeria"},
                    {text: "cursos", url: "/cursos"},
                    {text: "editais", url: "/editais"},
                    {text: "tutorial", url: "/tutorial"}
                ]
                } />
        </nav>
    )
}

const NavLinks = ({ data }) => {
    return (
        <div className="navLinks">
            {data.map((navitem, i) => {
                return <NavItem key={i} url={navitem.url} text={navitem.text} />
            })}
        </div>
    )
}
const NavItem = ({ text, url }) => {
    return (
        <Link className='navItem' to={url}>
            {text}
            <span></span>
        </Link>
    )
}
export const Image = ({ src, ...props }) => {
    return <img src={src} {...props} />
}