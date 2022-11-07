import React, { ReactElement } from 'react';
import { Section } from '../components/section'
import Feed  from '../components/feed';
import { Layout, MetaData } from '../components/root';
import { NextPage } from 'next';

const metaData: MetaData = {
    title: 'Eventos e documentos',
    description: '',
    keywords: '',
    robots: ''
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
export default News;
