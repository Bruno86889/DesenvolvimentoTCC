import React, { useState } from 'react'
import Image from 'next/image';
import { LargeText, SmallText } from './Text';
import {NavLinks} from './Navlinks';

import routes from '../data/routes';

const Navbar = ({ transparent = false }) => {
    const [active,setActive] = useState(false)

    return (
        <nav className={transparent ? 'transparent' : '' + active ? ' active' : ''}>
            <div className="logo">
                <Image  alt='logo' src={'/logo.svg'} width={70} height={65} style={{objectFit: "cover"}}/>
            </div>

            <div className="text">
                <LargeText text='etec fhg'/>
                <SmallText text='Ferrúcio Humberto Gazzetta | Nova Odessa'/>
            </div>
            <div className="icon" onClick={()=>{
                setActive(!active)
                console.log(active)
            }}></div>
            <NavLinks active={active} linkList={routes} />
        </nav>
    )
}

export default Navbar;
