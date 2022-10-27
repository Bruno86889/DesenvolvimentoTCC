import React from 'react'
import { Link } from 'react-router-dom';
import {Image} from './Image';
import {NavLinks} from './Navlinks';

import logo from '../publics/logo.svg'

import routes from '../data/routes';

export const Navbar = ({ transparent = false }) => {
    return (
        <nav className={transparent ? 'transparent' : ''}>
            <Image className='logo' src={logo} />

            <div className="text">
                <p>etec fhg</p>
                <p>Ferrúcio humberto gazzetta | Nova Odessa</p>
            </div>

            <NavLinks linkList={routes} />
        </nav>
    )
}


