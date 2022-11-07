import { Section } from '../components/section'

import React from 'react';
import { Layout, MetaData } from '../components/root';
import Galeria from '../components/galeria';

const metaData: MetaData = {
    title: 'Fotos da escola',
    description: '',
    keywords: '',
    robots: ''
}

// TODO: pegar imagens do BD
const GaleriaPage = () => {
    return (
        <Layout meta={metaData}>
            <Section>
                <Galeria />
            </Section>
        </Layout>
    )
}

export default GaleriaPage;