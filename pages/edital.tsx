import {Section } from '../components/Main'

import React from 'react';
import { Layout, MetaData } from '../components/Root';
import { LargeText } from '../components/Text';

const metaData:MetaData = {
    title: 'Editais',
    description: '',
    keywords:'',
    robots:''
}

const Edital = () => {
    return (
        <Layout meta={metaData}>
            <Section>
                <LargeText text='Editais vão aqui'/>
            </Section>
        </Layout>
    )
}

export default Edital;