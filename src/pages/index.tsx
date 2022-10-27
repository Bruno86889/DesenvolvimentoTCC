import React from 'react';
import { Navbar } from '../componentes/Navbar'
import { Footer } from '../componentes/Footer'
import { Main, Section } from '../componentes/Main'
import {Feed} from '../componentes/Feed';


const News = () => {
    return (
        <>
            <Navbar />
            <Main>
                <Section>
                    <Feed/>
                </Section>
            </Main>
            <Footer />
        </>
    )
}

export default News
