import Link from 'next/link'
import { useRouter } from 'next/router'
import { MediumText, SmallText } from './text'

export type NavLinkType = {
    url: string,
    text: string,
}

const Navlink = (props: NavLinkType)=>{
    const router = useRouter()


    return (
    <Link className={router.asPath === props.url ? 'navItem active' : 'navItem'} href={props.url}>
        <SmallText text={props.text}/>
    </Link>
    )
}

export type NavListLinks = NavLinkType[]

export interface NavListOfLinks 
{
    linkList: NavListLinks,
    active: boolean
}

export const NavLinks = (props:NavListOfLinks)=>{
    return (
        <div className={props.active ? 'navLinks active': 'navLinks'}>
            {props.linkList.map((item,ind)=>{
                return <Navlink key={ind} url={item.url} text={item.text} />
            })}
        </div>
    )
}
