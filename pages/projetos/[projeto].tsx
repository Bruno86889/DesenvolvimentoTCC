import { Navbar } from '../../components/Navbar'
import { Footer } from '../../components/Footer'
import { Main, Section } from '../../components/Main'

import React from 'react';

const Projeto = () => {
    return (
        <>
            <Navbar />
            <Main>
                <Section>
                    <p>Projetos vem dinamicamente para cá</p>
                </Section>
            </Main>
            <Footer />
        </>
    )
}

export default Projeto;