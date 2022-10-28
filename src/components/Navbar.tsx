import React from 'react'
import { Image } from './Image';
import { NavLinks } from './Navlinks';

import logo from '../publics/logo.svg'

import routes from '../data/routes';

export const Navbar = ({ transparent = false }) => {
    return (
        <nav className={transparent ? 'transparent' : ''}>
            <div className="logo">
                <Image className='logo' src={logo} />
            </div>

            <div className="text">
                <p>etec fhg</p>
                <p>Ferrúcio Humberto Gazzetta | Nova Odessa</p>
            </div>

            <NavLinks linkList={routes} />
        </nav>
    )
}


