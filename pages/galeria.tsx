import { Section } from '../components/Main'

import React from 'react';
import { Layout, MetaData } from '../components/Root';
import { MediumText } from '../components/Text';


const metaData: MetaData = {
    title: 'Fotos da escola',
    description: '',
    keywords: '',
    robots: ''
}

// TODO: pegar imagens do BD
const Galeria = () => {
    return (
        <Layout meta={metaData}>
            <Section>
                <MediumText text='Fotos da escola vão aqui' />
            </Section>
        </Layout>
    )
}

export default Galeria;