import React from 'react';
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { Main, Section } from '../components/Main'
import {Feed} from '../components/Feed';

const News = () => {
    return (
        <>
            <Navbar />
            <Main>
                <Section>
                    <Feed />
                </Section>
            </Main>
            <Footer />
        </>
    )
}

export default News
