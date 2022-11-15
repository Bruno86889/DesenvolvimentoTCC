import React from 'react';

import Galeria from '@/components/galeria';
import { Section } from '@/components/section'
import { Layout } from '@/components/root';

const metaData: MetaData = {
    title: 'Fotos da escola',
    description: '',
    keywords: '',
    robots: ''
}

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