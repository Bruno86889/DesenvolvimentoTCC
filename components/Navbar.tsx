import React, { useState } from 'react'
import Image from 'next/image';
import { LargeText, MediumText, SmallText } from './text';
import { NavLinks } from './navlinks';

import routes from '../data/routes';

const Navbar = ({ transparent = false }) => {
    const [active, setActive] = useState(false)

    return (
        <nav className={transparent ? 'transparent' : '' + active ? ' active' : ''}>
            <div className="content">
                <div className="logo">
                    <Image alt='logo' src={'/logo.svg'} width={70} height={65} style={{ objectFit: "cover" }} priority />
                </div>

                <div className="text">
                    <LargeText text='etec fhg' />
                    <SmallText text='Ferrúcio Humberto Gazzetta' />
                    <SmallText text='Nova Odessa' />
                </div>

                <div className={active ? 'icon active' : 'icon'} onClick={() => {
                    setActive(!active)
                    console.log(active)
                }}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div className="nav-wrap">
                <NavLinks active={active} linkList={routes} />
            </div>
        </nav>
    )
}

export default Navbar;
