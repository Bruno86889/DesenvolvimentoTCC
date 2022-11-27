import React, { useEffect, useLayoutEffect, useState } from 'react'
import Image from 'next/image';

import { LargeText, SmallText } from './text';
import { NavLinks } from './navlinks';

import routes from '@/data/routes';

const Navbar = () => {
    const [active, setActive] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const scroll = () => {
            if (window.scrollY < 20) {
                setScrolled(false)
            }
            if (window.scrollY >= 100) {
                setScrolled(true)
            }
        }
        window.addEventListener("scroll", scroll)
    }, [])

    return (
        <nav className={scrolled ? 'scrolled' : '' + active ? ' active' : ''}>
            <div className="content">
                <div className="logo">
                    <Image alt='logo' src={'/logo.svg'} width={70} height={65} style={{ objectFit: "cover" }} priority />
                </div>

                <div className="text">
                    <LargeText text='etec fhg' />
                    <SmallText text='Ferrúcio Humberto Gazzetta' />
                    <SmallText text='Nova Odessa' />
                    {/* <Image alt='logo' src={'/etec_ra.png'} width={100} height={90} style={{ objectFit: "contain" }} priority /> */}
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
