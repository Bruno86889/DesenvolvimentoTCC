import {Section } from '../components/Main'

import React from 'react';
import { Layout, MetaData } from '../components/Root';
import { LargeText } from '../components/Text';

const metaData:MetaData = {
    title: 'Contato',
    description: '',
    keywords:'',
    robots:''
}

const Contato = () => {
    return (
        <Layout meta={metaData}>
            <Section>
                <LargeText text='contato'/>
            </Section>
        </Layout>
    )
}

export default Contato;