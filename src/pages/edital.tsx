import { Navbar } from '../componentes/Navbar'
import { Footer } from '../componentes/Footer'
import { Main, Section } from '../componentes/Main'

import React from 'react';

const Edital = () => {
    return (
        <>
            <Navbar />
            <Main>
                <Section>
                    <h1>Editais vão aqui</h1>
                </Section>
            </Main>
            <Footer />
        </>
    )
}

export default Edital;