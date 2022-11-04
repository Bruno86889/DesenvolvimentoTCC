import {Section } from '../components/section'

import React from 'react';
import { Layout, MetaData } from '../components/root';
import { LargeText } from '../components/text';

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