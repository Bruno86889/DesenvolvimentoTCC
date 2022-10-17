import { Navbar, Image } from '../componentes/Navbar'
import { Footer } from '../componentes/Footer'
import { Main, Section } from '../componentes/Main'

import etec from '../img/etec.jpeg';
import logo from '../img/logo.png';
import etec2 from '../img/etec2.jpg';
import {TutorialSection} from '../componentes/TutorialSection'

import {tutoriais} from '../data/tutorial';

import React from 'react';

export const Intitucional = () => {
    return (
        <>
        <Navbar/>
        <Section>
            <Main>
                {tutoriais.map((section,i)=>{
                    return <TutorialSection data={section}/>
                })}
            </Main>
        </Section>
        <Footer/>
        </>
    )
}