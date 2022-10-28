import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { Main, Section } from '../components/Main'

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