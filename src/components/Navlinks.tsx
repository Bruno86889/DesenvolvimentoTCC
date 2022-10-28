// import Link from 'next/link'
// import { useRouter } from 'next/router'

import React from "react"
import { Link } from "react-router-dom"

export type NavLinkType = {
    url: string,
    text: string,
}

const Navlink = (props: NavLinkType)=>{
    // const router = useRouter()

    // return (
    //     <Link href={props.url}>
    //         <a className={router.asPath === props.url ? 'active' : ''}>{props.text}</a>
    //     </Link>
    //     )

    return (
    <Link className="navItem" to={props.url}>
        {props.text}
    </Link>
    )
}

export type NavListLinks = NavLinkType[]

export interface NavListOfLinks 
{
    linkList: NavListLinks
}

export const NavLinks = (props:NavListOfLinks)=>{
    return (
        <div className="navLinks">
            {props.linkList.map((item,ind)=>{
                return <Navlink key={ind} url={item.url} text={item.text} />
            })}
        </div>
    )
}
