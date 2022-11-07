import {Section } from '../../components/section'

import React from 'react';
import { Layout, MetaData } from '../../components/root';
import { LargeText } from '../../components/text';

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