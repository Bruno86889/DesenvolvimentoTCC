import type { NextPage } from 'next'
import Image from 'next/image'
import { NavLinks } from '../components/Navlinks'
import type {NavListOfLinks,NavLinkType} from '../components/Navlinks'
import { Navbar } from '../components/Navbar'

const Page404: NextPage = () => {
  return (
    <>
    <Navbar />   
    <h1>Não encontrado</h1>
    </>
  )
}

export default Page404
