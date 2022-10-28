import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import {NavLinks} from './Navlinks';

import logo from '../public/logo.svg'

import routes from '../data/routes';

export const Navbar = ({ transparent = false }) => {
    return (
        <nav className={transparent ? 'transparent' : ''}>
            {/* <div className="logo">
            </div> */}
            <Image className='logo' alt='logo' src={logo} width={70} height={65} style={{objectFit: "cover"}}/>

            <div className="text">
                <p>etec fhg</p>
                <p>Ferrúcio humberto gazzetta | Nova Odessa</p>
            </div>

            <NavLinks linkList={routes} />
        </nav>
    )
}


