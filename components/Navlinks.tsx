import Link from 'next/link'
import { useRouter } from 'next/router'

export type NavLinkType = {
    url: string,
    text: string,
}

const Navlink = (props: NavLinkType)=>{
    const router = useRouter()


    return (
    <Link className={router.asPath === props.url ? 'navItem active' : 'navItem'} href={props.url}>
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
