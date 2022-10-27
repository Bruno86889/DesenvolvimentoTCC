import { Navbar } from '../componentes/Navbar'
import { Footer } from '../componentes/Footer'
import { Main, Section } from '../componentes/Main'

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