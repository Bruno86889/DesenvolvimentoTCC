// TODO: rota dinamica do curso

import { Navbar } from '../../components/Navbar'
import { Footer } from '../../components/Footer'
import { Main, Section } from '../../components/Main'

import React from 'react';

const Curso = () => {
    return (
        <>
            <Navbar />
            <Main>
                <Section>
                    <p>Os cursos vem dinamicamente para cá</p>
                </Section>
            </Main>
            <Footer />
        </>
    )
}

export default Curso;