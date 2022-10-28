import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { Main, Section } from '../components/Main'

import React from 'react';

// TODO: pegar imagens do BD
const Galeria = () => {
    return (
        <>
            <Navbar />
            <Main>
                <Section>
                    <h1>Fotos vão aqui</h1>
                </Section>
            </Main>
            <Footer />
        </>
    )
}

export default Galeria;