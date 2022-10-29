import React, { ReactElement } from 'react';
import { Section } from '../components/Main'
import { Feed } from '../components/Feed';
import { Layout, MetaData } from '../components/Root';
import { NextPage } from 'next';

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
                <Feed />
            </Section>
        </Layout>
    )
}
export default News
