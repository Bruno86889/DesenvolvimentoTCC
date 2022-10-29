import React, { ReactElement } from 'react';
import { Section } from '../components/Main'
import { Feed } from '../components/Feed';
import { Layout, MetaData, RootLayout } from '../components/Root';
import { NextPage } from 'next';
import Footer from '../components/Footer'
import Navbar from '../components/Navbar';
const metaData:MetaData = {
    title: 'Eventos e documentos',
    description: '',
    keywords:'',
    robots:''
}

const News: NextPage = () => {
    return (
        <Layout meta={metaData}>
            <Section>
                <Feed/>
            </Section>
        </Layout>
    )
}
export default News
